from flask import Flask, request
from flask_cors import CORS
import redis
from redis.commands.search.query import Query
import time
import json
import os

app = Flask(__name__)
CORS(app)

r = redis.Redis(
  host=os.environ['REDIS_HOST'],
  port=int(os.environ['REDIS_PORT']),
  password=os.environ['REDIS_PASSWORD'])
rs = r.ft("anthropic-data")

@app.route("/")
def index():
    query = request.args.get('query')

    start_time = time.time()
    res = rs.search(
        Query(query)
    )
    end_time = time.time()
    elapsed_time_ms = (end_time - start_time) * 1000

    data = {}
    doc_array = []

    for i in range(len(res.docs)):
        doc = json.loads(res.docs[i].json) 
        values = {}
        values["index"] = doc["index"]
        activations = []
        for j in range(len(doc["act_buckets"])):
            activations.append({
                "activation": doc["act_buckets"][j],
                "edge": doc["act_bucket_edges"][j]
            })
        values["activations"] = activations 
        values["negative_logits"] = sorted(doc["logit_effects"]["negatives"], key=lambda x:x[1])[:5]
        values["positive_logits"] = sorted(doc["logit_effects"]["positives"], key=lambda x: x[1], reverse=True)[:5]
        values["activation_density"] = round(doc["statistics"]["density_frac"] * 100,2)
        values["max_activation"] = doc["statistics"]["global_max_act"]
        values["neuron_alignment"] = doc["statistics"]["abs_max_neuron_weights"]
        logits = []
        for j in range(len(doc["logit_buckets"])):
            logits.append({
                "logit": doc["logit_buckets"][j],
                "edge": doc["logit_bucket_edges"][j]
            })
        values["logits"] = logits
        doc_array.append(values)

    data["data"] = doc_array

    return {
        "data": data,
        "time_ms": "{:.2f}".format(elapsed_time_ms)
    } 

if __name__ == '__main__':
    app.run()
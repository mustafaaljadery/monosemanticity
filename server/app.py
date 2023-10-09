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
        values["act_buckets"] = doc["act_buckets"]
        doc_array.append(values)

    data["data"] = doc_array

    return {
        "data": data,
        "time_ms": "{:.2f}".format(elapsed_time_ms)
    } 

if __name__ == '__main__':
    app.run()
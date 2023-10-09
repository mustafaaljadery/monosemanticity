import redis
from redis.commands.json.path import Path
from redis.commands.search.field import TextField
from redis.commands.search.indexDefinition import IndexDefinition, IndexType
from redis.commands.search.query import NumericFilter, Query
import json
import os
import time

r = redis.Redis(
  host=os.environ['REDIS_HOST'],
  port=int(os.environ['REDIS_PORT']),
  password=os.environ['REDIS_PASSWORD'])

folder_path = "../scraper/anthropic-data"
file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

rs = r.ft("anthropic-data")

schema = (
    TextField("$.token_strs", as_name="token_strs")
)

rs.create_index(
    schema,
    definition=IndexDefinition(
        prefix=["data:"], index_type=IndexType.JSON
    )
)

start_time = time.time()
for index, file in enumerate(file_names):
    print(index, file)
    file_path = f'../scraper/anthropic-data/{file}'
    with open(file_path, 'r') as file:
        data = json.load(file)
    
    token_strs = []

    for i in range(len(data["examples_quantiles"])):
        for j in range(len(data["examples_quantiles"][i]["examples"])):
            value = data["examples_quantiles"][i]["examples"][j]["tokens_str_list"]
            token_strs = token_strs + value

    data["token_strs"] = token_strs 

    r.json().set(f"data:{index}", Path.root_path(), data) 

end_time = time.time()
elapsed_time_ms = (end_time - start_time) * 1000

print(f"Execution time: {elapsed_time_ms:.2f} ms")
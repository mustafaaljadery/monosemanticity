import redis
from redis.commands.json.path import Path
import redis.commands.search.aggregation as aggregations
import redis.commands.search.reducers as reducers
from redis.commands.search.field import TextField, NumericField, TagField
from redis.commands.search.indexDefinition import IndexDefinition, IndexType
from redis.commands.search.query import NumericFilter, Query
import time
import os

r = redis.Redis(
  host=os.environ['REDIS_HOST'],
  port=int(os.environ['REDIS_PORT']),
  password=os.environ['REDIS_PASSWORD'])
rs = r.ft("anthropic-data")

start_time = time.time()
res = rs.search(
    Query("already")
)
print(res)
end_time = time.time()
elapsed_time_ms = (end_time - start_time) * 1000
print(f"Execution time: {elapsed_time_ms:.2f} ms")
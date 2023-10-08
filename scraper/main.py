import requests
import json
import os
import time

# 4095 

for i in range(2268,4095):
    url = f'https://transformer-circuits.pub/2023/monosemantic-features/vis/a1/{i+1}.json'  # Replace with the URL you want to request
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        file_path = os.path.join("anthropic-data", f"{i+1}.json")
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file)
    else:
        print(f'Number: {i+1},Request failed with status code:', response.status_code)
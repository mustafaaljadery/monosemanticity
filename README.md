# Monosemantic Search

We take the [visualization interface](https://transformer-circuits.pub/2023/monosemantic-features/vis/a1.html) from [Anthropic's](https://github.com/anthropics) \*Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\* and make it **80x+** faster.

Check it out [here](https://www.monosemanticity.com/)!

![speed](./frontend/public/speed.png)

## How does this work?

We first scrape all of the data from Anthropic. Then index all the tokens we wnat to search using redis. Redis then allows for extremely fast retrieval.

## Dev & Production

First get all the data. This is done from the scraper folder. It's all already scraped. You can use that data as well.

## Acknowledgement

This work was created by [Mustafa Aljadery](https://www.maxaljadery.com/) & [Siddharth Sharma](https://stanford.edu/~sidshr/).

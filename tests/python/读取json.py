# -*- coding: utf-8 -*-

with open("/Users/wujunlei/Downloads/chrome_downloads/comments.json") as f:
    _json = f.read()

import pandas as pd
data = pd.read_json(_json)
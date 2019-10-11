#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2019-07-18 21:18:39
# Project: crawl_novel

from pyspider.libs.base_handler import *
import re
from pymongo import MongoClient
client = MongoClient("mongodb://lab421:lab421_1@10.1.17.15:27017")
db = client.novel


class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        self.crawl('https://www.biqukan.com/53_53739/', callback=self.index_page)

    @config(age=10 * 24 * 60 * 60)
    def index_page(self, response):
        p = response.doc
        items = list(p('body > div.listmain > dl > dd > a').items())[1060:]
        for index, each in enumerate(items):
            url = each.attr('href').strip()
            data = {}
            data["index"] = index
            data["title"] = each.text().strip()
            self.crawl(url, callback=self.detail_page, save={"data": data})

    @config(priority=2)
    def detail_page(self, response):
        p = response.doc
        data = response.save["data"]
        data["content"] = p("#content").text().strip()
        if db["novel01"].find({"index": data["index"], "title": data["title"]}).count() == 0:
            result = db["novel01"].insert(data)
        else:
            result = db["novel01"].update({"index": data["index"], "title": data["title"]}, {"$set": data})
        print(result)
        
        

import os, json
from datetime import datetime

now = datetime.now()
date = now.date()
time = now.time()

if os.path.exists("public/news.json"):
    with open("public/news.json", "r") as file:
        Content = json.load(file)
else:
    Content = {}

#with open("./public/sitemap-0.xml", "r") as file:
#    sitemap0 = file.read()[:-9]

sitemap0 = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>https://newdev0.in</loc><lastmod>2022-12-08T06:22:08.481Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://newdev0.in/news</loc><lastmod>2022-12-08T06:22:08.481Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://newdev0.in/projects</loc><lastmod>2022-12-08T06:22:08.481Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://newdev0.in/tgtwitterbot</loc><lastmod>2022-12-08T06:22:08.481Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://newdev0.in/tgtwitterstreamer</loc><lastmod>2022-12-08T06:22:08.481Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
"""

for page in list(Content.keys()):
    sitemap0 += f'\n<url><loc>https://newdev0.in/news/{page}</loc><lastmod>{date}T{time}1Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>'

sitemap0 += "\n</urlset>"

with open("public/sitemap-0.xml", "w", encoding="utf-8") as file:
    file.write(sitemap0) 
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import news from "../../public/news.json";

export default function handler(req, res) {

  let hash = req.query.hash;
  if (!hash || !news[hash]) {
    res.json({"ok": false})
    return 
  }
  res.status(200).json(news[hash]);
}

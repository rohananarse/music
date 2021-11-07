// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require('./data.json')


export default function handler(req, res) {
  res.status(200).json({ events })
}

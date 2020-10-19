let arc = require('@architect/functions')
let layout = require('@architect/views/layout')

exports.handler = arc.http.async(index)

async function index(req) {
  let token = req.params.token

  return {
    html: layout({
      account: req.session.account,
      body: `verifying email ... with token: ${token}`
    })
  }


}
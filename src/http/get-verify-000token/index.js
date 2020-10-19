let arc = require('@architect/functions')
let layout = require('@architect/views/layout')
let data = require('@begin/data')

exports.handler = arc.http.async(index)

async function index(req) {
  let token = req.params.token

  //compare token
  let result = await data.get({table: 'tokens', key: token})
  if (result.key === token) {
    return {
      html: layout({
        account: req.session.account,
        body: `verifying email ... with token: ${token}`
      })
    }
  }


}
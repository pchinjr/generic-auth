// learn more about event functions here: https://arc.codes/primitives/events
let data = require('@begin/data')
let arc = require('@architect/functions')
const mail = require('@sendgrid/mail')

// events capture just data it needs, to simplify later
async function registered(event) {
  let email = event.key

  console.log(JSON.stringify(event, null, 2))

  mail.setApiKey(process.env.SENDGRID_API_KEY)

  try {
    // let fiveMinutes = 300000
    // let ttl = (Date.now() + fiveMinutes) / 1000
    // let token = await data.set({table: `tokens`, email, ttl})
    let result = await mail.send({
      to: email, // Change to your recipient
      from: 'paul@begin.com', // Change to your verified sender
      subject: 'Welcome to the service',
      // text: `verify email ${process.env.BASE_URL}/verify/${token.key}`,
      text: `verify email ${process.env.BASE_URL}/verify/`
    });
    console.log(result, 'made it here')
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

exports.handler = arc.events.subscribe(registered)
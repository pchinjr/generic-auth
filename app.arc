@app
authflow

@http
get /

get /admin # super important
get /login
get /logout
get /register
get /forgot
get /reset/:token
get /verify/:token

post /register
post /register/nuke
post /login
post /logout
post /forgot
post /reset

@events
registered

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

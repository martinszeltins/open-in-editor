const express = require('express')
const launchMiddleware = require('launch-editor-middleware')
const app = express()

app.use('/__open-in-editor', launchMiddleware())

app.all('*', (request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*')
	response.header('Access-Control-Allow-Headers', '*')
	response.header('Access-Control-Allow-Methods', '*')
	next()
})

app.listen(5173)

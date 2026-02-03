#!/usr/bin/env node

const express = require('express')
const launchEditorMiddleware = require('./launch-editor-middleware')
const app = express()

app.use('/__open-in-editor', launchEditorMiddleware('code'))

app.all('*', (request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*')
	response.header('Access-Control-Allow-Headers', '*')
	response.header('Access-Control-Allow-Methods', '*')
	next()
})

app.listen(44044, '0.0.0.0')

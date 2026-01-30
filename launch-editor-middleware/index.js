const url = require('url')
const path = require('path')
const launch = require('../launch-editor')

module.exports = (specifiedEditor, srcRoot, onErrorCallback) => {
  if (typeof specifiedEditor === 'function') {
    onErrorCallback = specifiedEditor
    specifiedEditor = undefined
  }

  if (typeof srcRoot === 'function') {
    onErrorCallback = srcRoot
    srcRoot = undefined
  }

  srcRoot = srcRoot || process.cwd()

  return function launchEditorMiddleware (req, res, next) {
    const { file } = url.parse(req.url, true).query || {}
    const { remote } = url.parse(req.url, true).query || {}

    if (!file) {
      res.statusCode = 500
      res.end(`launch-editor-middleware: required query param "file" is missing.`)
    } else {
      const filePath = file

      if (remote) {
        console.log('Launching editor for remote file (remote):', filePath)
        launch(filePath, specifiedEditor, remote, onErrorCallback)
      } else {
        console.log('Launching editor for file:', filePath)
        launch(filePath, specifiedEditor, '', onErrorCallback)
      }
      res.end()
    }
  }
}

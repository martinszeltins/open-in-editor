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
      if (remote) {
        launch(path.resolve(srcRoot, file), specifiedEditor, remote, onErrorCallback)
      } else {
          launch(path.resolve(srcRoot, file), specifiedEditor, '', onErrorCallback)
      }
      res.end()
    }
  }
}

# @martinszeltins/open-in-editor

Open files in your editor directly from the browser.

## Usage

```bash
npx @martinszeltins/open-in-editor
```

This starts a server on port `44044`. Send requests to open files:

```
GET http://localhost:44044/__open-in-editor?file=/path/to/file.js

$ curl "http://localhost:44044/__open-in-editor?file=/path/to/file.js"
```

## License

MIT

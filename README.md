# @martinszeltins/open-in-editor

Open files in your editor directly from the browser.

## Usage

```bash
npx @martinszeltins/open-in-editor@latest
```

This starts a server on port `44044`. Send requests to open files:

```
$ curl "http://localhost:44044/__open-in-editor?file=/home/martins/Programming/open-in-editor/main.js:3"
```

## License

MIT

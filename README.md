<br />

<p align="center">
    <img src="https://raw.githubusercontent.com/d-edge/strip-markdown-html/main/strip-html.png" alt="strip-markdown-html logo" height="140">
</p>

<br />

Strip-markdown-html is a GitHub action to strip HTML tags from a Markdown file.

## Example usage

```yaml
- name: Strip HTML from README
  uses: d-edge/strip-markdown-html@v0.2
  with:
    input-path: README.md
    output-path: out/README.md
```

## Parameters

* `input-path` (mandatory): Path to the input Markdown file that contains some HTML.

* `output-path` (optional): Path to the output Markdown file stripped of HTML.  
    If unspecified, use `input-path`, ie modify the file in place.

* `encoding` (optional): The text encoding of the file. Default: `utf8`.

## License

[MIT](https://raw.githubusercontent.com/d-edge/strip-markdown-html/main/LICENSE)

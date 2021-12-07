# strip-markdown-html

GitHub action to strip HTML tags from a Markdown file.

## Example usage

```yaml
- name: Strip HTML from README
  uses: d-edge/strip-markdown-html@v0.1
  with:
    input-path: README.md
    output-path: out/README.md
```

## Parameters

* `input-path` (mandatory): Path to the input Markdown file that contains some HTML.

* `output-path` (optional): Path to the output Markdown file stripped of HTML.  
    If unspecified, use `input-path`, ie modify the file in place.

* `encoding` (optional): The text encoding of the file. Default: `utf8`.

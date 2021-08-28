# hexo-reference-mashiro

Forked from [kchen0x](https://github.com/kchen0x/hexo-reference) and edited from [HarborZeng](https://github.com/HarborZeng/hexo-reference/blob/master/src/footnotes.js). This allows you to use Markdown footnotes within Hexo's tag plugins and elsewhere.

## Installation

```
npm i hexo-reference-mashiro --save
```

**Note:** You MUST do this within your Hexo blog's root directory.

## Syntax

### Markdown

```
Footnote[^1]
Inline footnote[^2](inline footnote)

[^1]: Content
[^2]: This uses [Markdown](https://en.wikipedia.org/wiki/Markdown), so you can add links here and the likes.
```

## Customization

Customize the footnote link's style by making a `a.fn` class.

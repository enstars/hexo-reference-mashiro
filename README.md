# hexo-reference-mashiro

Forked from [kchen0x](https://github.com/kchen0x/hexo-reference) and edited from [HarborZeng](https://github.com/HarborZeng/hexo-reference/blob/master/src/footnotes.js). This version doesn't have tooltips and is optimized for [NexT Mashiro](https://github.com/watatomo/next-mashiro).

## Installation

```
  npm i hexo-reference-mashiro
```

**Note:** You MUST do this within your Hexo blog's root directory.

## Syntax

### Markdown
```
basic footnote[^1]
here is an inline footnote[^2](inline footnote)
and another one[^3]
and another one[^4]

[^1]: basic footnote content
[^3]: paragraph
footnote
content
[^4]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)
```

## Customization

Customize the footnote link's style by making a `a.fn` class.

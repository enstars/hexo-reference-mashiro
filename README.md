# hexo-reference-mashiro

Forked from [kchen0x](https://github.com/kchen0x/hexo-reference) and edited from [HarborZeng](https://github.com/HarborZeng/hexo-reference/blob/master/src/footnotes.js). This allows you to use Markdown footnotes within Hexo's tag plugins and elsewhere. *Must be used with [Mashiro](https://github.com/enstars/mashiro).

## Installation

```
npm i hexo-reference-mashiro --save
```

**Note:** You MUST do this within your Hexo blog's root directory.

Place `<script src="https://cdn.jsdelivr.net/gh/enstars/mashiro@2.0.1/dist/mashiro.js"></script>` under `<head>`.

## Syntax

This plugin uses the Markdown language. ***Due to the limitations of regex, you cannot have two of the same tag in one footnote. You also cannot have a URL that ends with a parenthesis either.*** Please use plain HTML as a workaround.

```markdown
I have no idea what's going on. I also heard stuff about other units being trapped in weird places like a desert or a jungle...[^1]

[^1]: Alluding to *[Satellite](https://yoroshikilled.dreamwidth.org/10838.html)* and _[Sandstorm](https://fortunebanquet.tumblr.com/post/659604958452367360/sandstormprologue)._
```

**LIVE PREVIEW:** [TL archive](https://watatomo.github.io/tl/post/sanctuary/8/)

## Customization

Customize the footnote link's style by making a `.msr-fn` class in your css.

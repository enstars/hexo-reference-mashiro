# hexo-reference-mashiro

Forked from [kchen0x](https://github.com/kchen0x/hexo-reference) and edited from [HarborZeng](https://github.com/HarborZeng/hexo-reference/blob/master/src/footnotes.js). This allows you to use Markdown footnotes within Hexo's tag plugins and elsewhere.

## Installation

```
npm i hexo-reference-mashiro --save
```

**Note:** You MUST do this within your Hexo blog's root directory.

## Syntax

### Markdown

```markdown
Footnote[^1]
Inline footnote[^2](inline footnote)

[^1]: This uses [Markdown](https://en.wikipedia.org/wiki/Markdown), so you can add links here and the likes.
```

## Customization

Customize the footnote link's style by making a `a.fn` class in your css.

## Example

```markdown
{% bubble Wataru %}
  *Amazing!* Greetings, my beloved compatriots of the Creature Clubs!

  I am neither fin nor fur,[^1] but as we are all creatures of the same world, I shall entertain each and every one of you amicably in our time here together!

  Now, allow me to give a proper welcome! Would you like dinner? A bath? Or would you like...*me?*
{% endbubble %}

## Translation Notes

[^1]: Literally "neither of the land nor the sea" (陸のものとも海のものともつかない). It's modified from a [proverb](https://www.google.com/books/edition/英語のことわざ、 イディオム、フレーズ/f9eJCgAAQBAJ) meaning "neither fish nor fowl"—hard to predict.
```

![example](https://raw.githubusercontent.com/watatomo/hexo-reference-mashiro/master/example.gif)

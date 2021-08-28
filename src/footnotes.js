'use strict';

var md = require('markdown-it')({
    // allow HTML tags
    html: true
});

const util = require('hexo-util')

/**
 * Render markdown footnotes
 * @param {String} text
 * @returns {String} text
 */
function renderFootnotes(text) {
    var footnotes = [];
    var reFootnoteContent = /\[\^(\d+)\]: ?([\S\s]+?)(?=\[\^(?:\d+)\]|\n\n|$)/g;
    var reInlineFootnote = /\[\^(\d+)\]\((.+?)\)/g;
    var reFootnoteIndex = /\[\^(\d+)\]/g;
    var html = '';

    // treat all inline footnotes
    text = text.replace(reInlineFootnote, function (match, index, content) {
        footnotes.push({
            index: index,
            content: content
        });
        // remove content of inline footnote
        return '[^' + index + ']';
    });

    // treat all footnote contents
    text = text.replace(reFootnoteContent, function (match, index, content) {
        footnotes.push({
            index: index,
            content: content
        });
        // remove footnote content
        return '';
    });

    // create map for looking footnotes array
    function createLookMap(field) {
        var map = {}
        for (var i = 0; i < footnotes.length; i++) {
            var item = footnotes[i]
            var key = item[field]
            map[key] = item
        }
        return map
    }
    var indexMap = createLookMap("index")

    // render (HTML) footnotes reference
    text = text.replace(reFootnoteIndex,
        function (match, index) {
            var tooltip = indexMap[index].content;
            return util.htmlTag('sup', {id: "fnref:" + index},
                util.htmlTag('a', {href: "#fn:" + index, rel: "footnote"},
                    util.htmlTag("span", {
                        class: "hint--top hint--medium hint--rounded",
                        "aria-label": tooltip.replace(/(\r\n|\n|\r)/gm, "").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1').replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2').replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2').replace(/~~/g, '').replace(/<[^>]*>/g, '')
                    }, "[" + index + "]", false), false), false)
        });

    // sort footnotes by their index
    footnotes.sort(function (a, b) {
        return a.index - b.index;
    });

    // render footnotes (HTML)
    footnotes.forEach(function (footNote) {
        html += '<li id="fn:' + footNote.index + '">';
        html += '<span style="display: inline-block; vertical-align: top; margin-left: 10px;"><a href="#fnref:' + footNote.index + '" rev="footnote" class="fn">↑</a> ';
        html += md.renderInline(footNote.content.trim());
        html += '</span></li>';
    });

    // add footnotes at the end of the content
    if (footnotes.length) {
        text += '<div id="footnotes">';
        text += '<div id="footnotelist">';
        text += '<ol style="padding-left: 0; margin-left: 20px">' + html + '</ol>';
        text += '</div></div>';
    }
    return text;
}
module.exports = renderFootnotes;

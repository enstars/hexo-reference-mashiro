"use strict";

var md = require("markdown-it")({
    // allow HTML tags
    html: true,
});

const util = require("hexo-util");

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
    var html = "";

    // treat all inline footnotes
    text = text.replace(reInlineFootnote, function (match, index, content) {
        footnotes.push({
            index: index,
            content: content,
        });
        // remove content of inline footnote
        return "[^" + index + "]";
    });

    // treat all footnote contents
    text = text.replace(reFootnoteContent, function (match, index, content) {
        footnotes.push({
            index: index,
            content: content,
        });
        // remove footnote content
        return "";
    });

    // create map for looking footnotes array
    function createLookMap(field) {
        var map = {};
        for (var i = 0; i < footnotes.length; i++) {
            var item = footnotes[i];
            var key = item[field];
            map[key] = item;
        }
        return map;
    }
    var indexMap = createLookMap("index");

    // render (HTML) footnotes reference
    text = text.replace(reFootnoteIndex, function (match, index) {
        var tooltip = indexMap[index].content;
        return util.htmlTag(
            "a",
            {
                class: "msr-fn-inline",
                "data-tippy-content": tooltip
                    .replace(/(\r\n|\n|\r)/gm, "")
                    .replace(/'/g, "&apos;")
                    .replace(/"/g, "&quot;")
                    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href=&quot;$2&quot;>$1</a>")
                    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt=&quot;$1&quot; src=&quot;$2&quot; />")
                    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
                    .replace(/\*(.*)\*/gim, "<i>$1</i>")
                    .replace(/_(.*)_/gim, "<i>$1</i>")
                    .replace(/`(.*)`/gim, "<code>$1</code>")
                    .replace(/~~(.*)~~/gim, "<s>$1</s>"),
                id: "fnref:" + index,
            },
            index,
            false
        );
    });

    // sort footnotes by their index
    footnotes.sort(function (a, b) {
        return a.index - b.index;
    });

    // render footnotes (HTML)
    footnotes.forEach(function (footNote) {
        html += '<li id="fn:' + footNote.index + '">';
        html += '<a href="#fnref:' + footNote.index + '" class="arrow">↑</a> ';
        html += md.renderInline(footNote.content.trim());
        html += "</li>";
    });

    // add footnotes at the end of the content
    if (footnotes.length) {
        text += '<div class="msr-fn">';
        text += "<ol>" + html + "</ol>";
        text += "</div>";
    }
    return text;
}

module.exports = renderFootnotes;

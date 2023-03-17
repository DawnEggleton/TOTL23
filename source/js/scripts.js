//run start up functions - keep first
setTheme();
setSize();

//copy code to clipboard
let clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
    console.log('clipboard success: ' + e);
});
clipboard.on('error', function(e) {
    console.log('clipboard error: ' + e);
});
let clipcode = new Clipboard('.codeclick', {
    target: function(trigger) {
    return trigger.nextElementSibling;
    }
});
$("table[id='CODE-WRAP']").each(function() {
    var cc = $(this).find("td[id='CODE']").html();

    $(this).html(
        "<div class='codeblock code--wrapper'><div class='c-title codeclick'>Copy</div><div class='codecon'><pre><code class='scroll'>"
        + cc +
        "</code></pre></div></div>"
    );
});
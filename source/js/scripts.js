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

//profile popout linebreaks
document.querySelectorAll('.popout--name').forEach(breakTitle => {
    breakTitle.innerHTML = breakTitle.innerText.replace(` `, `<br>`);
});

//tabs
if(window.location.hash && document.querySelectorAll('tag-label').length !== 0) {
    let hash = window.location.hash.split('#')[1];
    let label = document.querySelector(`tag-label[data-tab="${hash}"]`);
    let tab = document.querySelector(`tag-tab[data-tab="${hash}"]`);
    let labels = label.parentNode.querySelectorAll('tag-label');
    let tabs = label.parentNode.parentNode.parentNode.querySelectorAll(':scope > tag-tabs > tag-tab');
    let tabsArray = Array.prototype.slice.call(tabs);
    let index = tabsArray.indexOf(tab);

    labels.forEach(sibling => sibling.classList.remove('is-active'));
    tabs.forEach(tab => {
        tab.classList.remove('is-active');
        tab.style.left = `${-100 * index}%`;
    });
    label.classList.add('is-active');
    tab.classList.add('is-active');

    window.location.hash = label.dataset.tab;
}
document.querySelectorAll('tag-labels').forEach(labelset => {
    labelset.querySelectorAll('tag-label').forEach((label, i) => {
        label.addEventListener('click', e => {
            let labels = label.parentNode.querySelectorAll('tag-label');
            let tabs = label.parentNode.parentNode.parentNode.querySelectorAll(':scope > tag-tabs > tag-tab');
            labels.forEach(sibling => sibling.classList.remove('is-active'));
            tabs.forEach(tab => {
                tab.classList.remove('is-active');
                tab.style.left = `${-100 * i}%`;
            });
            label.classList.add('is-active');
            tabs[i].classList.add('is-active');
    
            if(label.dataset.tab) {
                window.location.hash = label.dataset.tab;
            }
        });
    });
});
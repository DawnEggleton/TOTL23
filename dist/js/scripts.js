//set variables
let pageID = document.querySelector('body').id;

//init global
setTheme();
setSize();
initSideProfile();

//init clipboards
let clipboards = document.querySelectorAll('tag-code');
let codes = document.querySelectorAll(`table[id='CODE-WRAP']`);
if (clipboards.length > 0) {
    initClipboard();
}
if (codes.length > 0) {
    initCodebox();
}

//init tabs
let tabInstances = document.querySelectorAll('tag-labels');
if(tabInstances.length > 0 && pageID !== 'Pages') {
    initTabs();

    //if hash
    if(window.location.hash) {
        initHashTabs();
    }
}

//init index & category
if(pageID === 'idx' || pageID === 'SC') {
    $('.stats--recent').append($('#recent-topics tbody').html());
    $('#recent-topics').remove();
    capitalizeMultiple('.stats--current .scroll a span');
}

//init post
if(pageID === 'ST') {
    capitalizeMultiple('.post--name a');
    initMiniTabs();
    initAvatarPopout();
    document.querySelectorAll('.post.g-4 .charOnly, .post.g-6 .charOnly, .post.g-3.acc-Member .charOnly').forEach(el => el.remove());
}

//init post
if(pageID === 'Members') {
    initFilterPopout();
    initFilterDropdowns();
}

//user's posts
if(pageID === 'Search') {
    let names = document.querySelectorAll('#Search.code-show main > .tableborder:not(:last-of-type) > table tbody tr:nth-child(1) td:nth-child(1) .normalname a');
    if(names.length > 0) {
        names.forEach(el => {
            el.innerHTML = capitalize(el.innerHTML);
        });
    }
}
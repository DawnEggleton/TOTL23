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
if(tabInstances.length > 0) {
    initTabs();

    //if hash
    if(window.location.hash) {
        initHashTabs();
    }
}
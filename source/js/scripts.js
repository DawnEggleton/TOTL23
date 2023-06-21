//set variables
let pageID = document.querySelector('body').id;
let pageClasses = document.querySelector('body').classList;

//small scripts
//easy to select account swap
document.querySelectorAll('select[name="sub_id"] option').forEach(account => {
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;»/g,'');
});
document.querySelectorAll('#post_as_menu option').forEach(account => {
    account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;»/g,'');
});
//remove empty tooltips
$('*[title=""]').removeAttr('title');
$('*[tooltip=""]').removeAttr('tooltip');
if (typeof tippy === 'function') {
    tippy(document.querySelectorAll('[title]'), {
    content: (reference) => {
        const title = reference.getAttribute('title');
        reference.removeAttribute('title');
        return title;
    },
    theme: 'totl23',
    arrow: false
    });
}

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
    initCopyLink();
}

//init members
if(pageID === 'Members') {
    initFilterPopout();
    initFilterDropdowns();
}

//user's search
if(pageID === 'Search') {
    let names = document.querySelectorAll('#Search.code-show main > .tableborder:not(:last-of-type) > table tbody tr:nth-child(1) td:nth-child(1) .normalname a');
    if(names.length > 0) {
        names.forEach(el => {
            el.innerHTML = capitalize(el.innerHTML);
        });
    }
}

//Login
if(pageID === 'Login') {
    let textNodes = getAllTextNodes(document.querySelector('main'));
    textNodes.forEach(node => {
        const paragraph = document.createElement('p');
        node.after(paragraph);
        paragraph.appendChild(node);
    });
    $("main > p").nextUntil("div.tableborder").andSelf().wrapAll("<div class='content size--narrow'></div>");
    $(`input[name="UserName"]`).attr('placeholder','Username');
    $(`input[name="PassWord"]`).attr('placeholder','Password');
}

//registration
if(pageID === 'Reg') {
    let textNodes = getAllTextNodes(document.querySelector('.tablepad > table > tbody > tr:first-child > td:last-child fieldset:first-child'));
    if(textNodes) {
        textNodes.forEach(node => {
            const paragraph = document.createElement('p');
            node.after(paragraph);
            paragraph.appendChild(node);
        });
    }
    inputWrap(`label[for="agree_cbox"] input[name="read_tos"]`);
    inputWrap(`fieldset input[name="allow_admin_mail"]`);
    inputWrap(`fieldset input[name="allow_member_mail"]`);
    fancyBoxes();
    if(document.querySelector('input[name="agree"][type="checkbox"]')) {
        $('input[name="agree"][type="checkbox"]').wrap('<label class="input-wrap"></label>');
        $('.input-wrap').append('<div class="fancy-input checkbox"><i class="fa-solid fa-check"></i></div> I agree to the terms of this registration, <b>I am at least 18 years of age,</b> and wish to proceed.');
    }
}

//posting
if(pageID === 'Post') {
    let textNodes = getAllTextNodes(document.querySelector('#post-options .pformright'));
    if(textNodes) {
        textNodes.forEach(node => {
            const paragraph = document.createElement('p');
            node.after(paragraph);
            paragraph.appendChild(node);
        });
    }
    inputWrap(`input[name="enableemo"]`, 'br');
    inputWrap(`input[name="enablesig"]`, 'br');
    inputWrap(`input[name="enabletrack"]`, 'br');
    fancyBoxes();
}

//online list
if(pageID === 'Online') {
    let names = document.querySelectorAll('#Online main > .tableborder:nth-of-type(2) .maintitle + table > tbody > tr > td:first-child a:first-child');
    if(names.length > 0) {
        names.forEach(el => {
            el.innerHTML = capitalize(el.innerHTML);
        });
    }
}

//ucp
if(pageID === 'UserCP') {
    initUCPMenu('UserCP');

    if(pageClasses.contains('code-01')) {
        initUCPEdit();
    } else if (pageClasses.contains('code-54')) {
        document.querySelectorAll(`.tableborder:first-child input[type="checkbox"]`).forEach(input => inputWrap(input));
        fancyBoxes();
    } else if (pageClasses.contains('code-alerts')) {
        document.querySelectorAll(`form > .tableborder input[type="checkbox"]`).forEach(input => inputWrap(input));
        fancyBoxes();
    } else if (pageClasses.contains('code-50') || pageClasses.contains('code-26')) {
        document.querySelectorAll('.tableborder > table > tbody > tr').forEach(row => {
            if(row.querySelectorAll('th, td').length === 1) {
                row.classList.add('ucp--header', 'pformstrip');
            }
        });

        if(pageClasses.contains('code-26')) {
            document.querySelectorAll(`.tableborder input[type="checkbox"]`).forEach(input => inputWrap(input));
            fancyBoxes();
        }
    } else if (pageClasses.contains('code-04')) {
        inputWrap(document.querySelector(`input[name="DST"]`));
        fancyBoxes();
    } else if (pageClasses.contains('code-alerts_settings') || pageClasses.contains('code-02')) {
        document.querySelectorAll(`input[type="checkbox"]`).forEach(input => inputWrap(input));
        fancyBoxes();
    }
}

//messages
if(pageID === 'Msg') {
    initUCPMenu('Msg');

    if (pageClasses.contains('code-01')) {
        document.querySelectorAll(`input[type="checkbox"]`).forEach(input => inputWrap(input));
        fancyBoxes();
    } else if (pageClasses.contains('code-04')) {
        document.querySelectorAll(`input[type="checkbox"]`).forEach(input => inputWrap(input, 'br'));
        fancyBoxes();
    }
}

//store
if(pageID === 'store') {
    initStoreMenu();

    if (pageClasses.contains('store-do_staff_inventory')) {
        document.querySelectorAll(`input[type="checkbox"]`).forEach(input => inputWrap(input));
        fancyBoxes();
    }
}
//Settings
function setTheme() {
    if(localStorage.getItem('theme') !== null) {
        switch(localStorage.getItem('theme')) {
            case 'dark':
                document.querySelector('body').classList.remove('light');
                document.querySelector('body').classList.add('dark');
                break;
            case 'light':
            default:
                document.querySelector('body').classList.add('light');
                document.querySelector('body').classList.remove('dark');
                break;
        }
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
}
function setSize() {
    if(localStorage.getItem('size') !== null) {
        switch(localStorage.getItem('size')) {
            case 'large':
                document.querySelector('body').classList.remove('smFont');
                document.querySelector('body').classList.add('lgFont');
                break;
            case 'small':
            default:
                document.querySelector('body').classList.remove('lgFont');
                document.querySelector('body').classList.add('smFont');
                break;
        }
    } else {
        document.querySelector('body').classList.remove('lgFont');
        document.querySelector('body').classList.add('smFont');
        localStorage.setItem('size', 'small');
    }
}

//Toggles
function toggleMenu() {
    document.querySelector('.nav--menu-icon').classList.toggle('is-open');
    document.querySelector('.nav--main-toggle').classList.toggle('is-open');
    document.querySelector('.nav--settings-icon').classList.remove('is-open');
    document.querySelector('.nav--settings-toggle').classList.remove('is-open');
    document.querySelector('.nav--profile-icon').classList.remove('is-open');
    document.querySelector('.nav--profile-toggle').classList.remove('is-open');

    if(document.querySelector('.nav--menu-icon').classList.contains('is-open')) {
        window.addEventListener('click', toggleClose);
    } else {
        window.removeEventListener('click', toggleClose);
    }
}
function toggleSettings() {
    document.querySelector('.nav--settings-icon').classList.toggle('is-open');
    document.querySelector('.nav--settings-toggle').classList.toggle('is-open');
    document.querySelector('.nav--menu-icon').classList.remove('is-open');
    document.querySelector('.nav--main-toggle').classList.remove('is-open');
    document.querySelector('.nav--profile-icon').classList.remove('is-open');
    document.querySelector('.nav--profile-toggle').classList.remove('is-open');

    if(document.querySelector('.nav--settings-icon').classList.contains('is-open')) {
        window.addEventListener('click', toggleClose);
    } else {
        window.removeEventListener('click', toggleClose);
    }
}
function toggleProfile() {
    document.querySelector('.nav--profile-icon').classList.toggle('is-open');
    document.querySelector('.nav--profile-toggle').classList.toggle('is-open');
    document.querySelector('.nav--settings-icon').classList.remove('is-open');
    document.querySelector('.nav--settings-toggle').classList.remove('is-open');
    document.querySelector('.nav--menu-icon').classList.remove('is-open');
    document.querySelector('.nav--main-toggle').classList.remove('is-open');

    if(document.querySelector('.nav--profile-icon').classList.contains('is-open')) {
        window.addEventListener('click', toggleClose);
    } else {
        window.removeEventListener('click', toggleClose);
    }
}
function toggleClose(e) {
    if(e.target.matches('body > header, body > header *, main, main *')) {
        document.querySelectorAll('.popout.is-open, .popout--toggle.is-open').forEach(el => el.classList.remove('is-open'));
        window.removeEventListener('click', toggleClose);
    }
}
function toggleTheme() {
    if(localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme();
    } else {
        localStorage.setItem('theme', 'light');
        setTheme();
    }
}
function toggleSize() {
    if(localStorage.getItem('size') === 'small') {
        localStorage.setItem('size', 'large');
        setSize();
    } else {
        localStorage.setItem('size', 'small');
        setSize();
    }
}
function expandCanons(e) {
    e.classList.toggle('closed-branch');
    e.nextElementSibling.classList.toggle('closed-branch');
}
function expandAllCanons(e) {
    e.parentNode.querySelectorAll('.webpage--canon-expansion').forEach(button => {
        button.classList.remove('closed-branch');
    });
    e.parentNode.querySelectorAll('canonbranch').forEach(button => {
        button.classList.remove('closed-branch');
    });
}
function collapseAllCanons(e) {
    e.parentNode.querySelectorAll('.webpage--canon-expansion').forEach(button => {
        button.classList.add('closed-branch');
    });
    e.parentNode.querySelectorAll('canonbranch').forEach(button => {
        button.classList.add('closed-branch');
    });
}

//Initialization
function initClipboard() {
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
}
function initCodebox() {
    $("table[id='CODE-WRAP']").each(function() {
        var cc = $(this).find("td[id='CODE']").html();

        $(this).html(
            "<div class='codeblock code--wrapper'><div class='c-title codeclick'>Copy</div><div class='codecon'><pre><code class='scroll'>"
            + cc +
            "</code></pre></div></div>"
        );
    });
}
function initSideProfile() {
    document.querySelectorAll('.popout--name').forEach(breakTitle => {
        breakTitle.innerHTML = breakTitle.innerText.replace(` `, `<br>`);
    });
}
function initTabs() {
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
}
function initHashTabs() {
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
function initMiniTabs() {
    //for bullets
    document.querySelectorAll('.post--bullets').forEach(bulletset => {
        bulletset.querySelectorAll('button').forEach((bullet, i) => {
            bullet.addEventListener('click', e => {
                let bullets = bullet.parentNode.querySelectorAll('button');
                let slides = bullet.parentNode.parentNode.parentNode.querySelectorAll(':scope > .post--mini > .post--mini-slide');
                bullets.forEach(sibling => sibling.classList.remove('is-active'));
                slides.forEach(slide => {
                    slide.classList.remove('is-active');
                    slide.style.left = `${-100 * i}%`;
                });
                bullet.classList.add('is-active');
                slides[i].classList.add('is-active');

                if(i !== 0) {
                    bullet.parentNode.parentNode.parentNode.querySelector('.post--avatar-image').classList.add('noise');
                } else {
                    bullet.parentNode.parentNode.parentNode.querySelector('.post--avatar-image').classList.remove('noise');
                }
            });
        });
    });

    //for arrows
    document.querySelectorAll('.post--mini-nav').forEach(miniNav => {
        let arrows = miniNav.querySelectorAll('.post--arrow');
        let activeIndex = 0;
        arrows.forEach(arrow => {
            arrow.addEventListener('click', e => {
                let bullets = miniNav.querySelectorAll('.post--bullets button');
                let slides = miniNav.parentNode.querySelectorAll('.post--mini-slide');
                bullets.forEach((bullet, i) => {
                    if(bullet.classList.contains('is-active')) {
                        activeIndex = i;
                    }
                });
                if(e.currentTarget.classList.contains('arrow-left')) {
                    if(activeIndex === 0) {
                        activeIndex = bullets.length - 1;
                    } else {
                        activeIndex--;
                    }
                } else {
                    if(activeIndex === bullets.length - 1) {
                        activeIndex = 0;
                    } else {
                        activeIndex++;
                    }
                }
                bullets.forEach(bullet => bullet.classList.remove('is-active'));
                slides.forEach(slide => {
                    slide.classList.remove('is-active');
                    slide.style.left = `${-100 * activeIndex}%`;
                });
                bullets[activeIndex].classList.add('is-active');
                slides[activeIndex].classList.add('is-active');

                if(activeIndex !== 0) {
                    e.currentTarget.parentNode.parentNode.querySelector('.post--avatar-image').classList.add('noise');
                } else {
                    e.currentTarget.parentNode.parentNode.querySelector('.post--avatar-image').classList.remove('noise');
                }
            });
        });
    });
}
function initAvatarPopout() {
    document.querySelectorAll('.post--popout button').forEach(toggle => {
        toggle.addEventListener('click', e => {
            e.currentTarget.classList.toggle('is-open');
            e.currentTarget.nextElementSibling.classList.toggle('is-open');
        });
    });
}
function initFilterPopout() {
    document.querySelectorAll('.ml--filters > button').forEach(toggle => {
        toggle.addEventListener('click', e => {
            e.currentTarget.classList.toggle('is-open');
            e.currentTarget.parentNode.classList.toggle('is-open');
            e.currentTarget.nextElementSibling.classList.toggle('is-open');
        });
    });
}
function initFilterDropdowns() {
    document.querySelectorAll('.ml--filter > a').forEach(toggle => {
        toggle.addEventListener('click', e => {
            e.currentTarget.classList.toggle('is-open');
        });
    });
}
function initWebpageTabs() {
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

                if(label.dataset.category) {
                    document.querySelector(`tag-label[data-tab="${label.dataset.category}"]`).classList.add('is-active');
                }
                if(label.dataset.subcategory) {
                    document.querySelector(`tag-label[data-tab="${label.dataset.subcategory}"]`).classList.add('is-active');
                }
                if(label.dataset.firstTab) {
                    let activeTab = document.querySelector(`tag-label[data-inner-tab="${label.dataset.firstTab}"]`);
                    activeTab.parentNode.querySelectorAll('tag-label').forEach(label => label.classList.remove('is-active'));
                    activeTab.parentNode.parentNode.parentNode.querySelectorAll('.webpage--tabs tag-label').forEach(label => label.classList.remove('is-active'));
                    activeTab.classList.add('is-active');
                    let subcategory = document.querySelector(`tag-label[data-tab="${activeTab.dataset.subcategory}"]`);
                    if(subcategory) {
                        subcategory.classList.add('is-active');
                    }
                }
                if(label.dataset.triggerTab) {
                    let activeTab = document.querySelector(`tag-label[data-inner-tab="${label.dataset.triggerTab}"]`);
                    activeTab.classList.add('is-active');
                }
        
                if(label.dataset.firstTab) {
                    window.location.hash = label.dataset.firstTab;
                } else if(label.dataset.triggerTab) {
                    window.location.hash = label.dataset.triggerTab;
                } else if(label.dataset.innerTab) {
                    window.location.hash = label.dataset.innerTab;
                } else if(label.dataset.tab) {
                    window.location.hash = label.dataset.tab;
                }
            });
        });
    });
}
function initWebpageHashTabs() {
    let hash = window.location.hash.split('#')[1];

    //reset
    let allLabels = document.querySelectorAll('tag-label');
    allLabels.forEach(label => label.classList.remove('is-active'));
    let allTabs = document.querySelectorAll('tag-tab');
    allTabs.forEach(tab => tab.classList.remove('is-active'));

    //label level
    let label = document.querySelector(`tag-label[data-inner-tab="${hash}"]`);
    let tab = document.querySelector(`tag-tab[data-inner-tab="${hash}"]`);
    let tabs = label.parentNode.parentNode.parentNode.querySelectorAll(':scope > tag-tabs > tag-tab');
    let tabsArray = Array.prototype.slice.call(tabs);
    let index = tabsArray.indexOf(tab);
    tabs.forEach(tab => tab.style.left = `${-100 * index}%`);
    label.classList.add('is-active');
    tab.classList.add('is-active');

    //category level
    let categoryLabel = document.querySelector(`tag-label[data-tab="${label.dataset.category}"]`);
    if(categoryLabel) {
        let categoryTab = document.querySelector(`tag-tab[data-tab="${label.dataset.category}"]`);
        let categoryTabs = categoryLabel.parentNode.parentNode.parentNode.querySelectorAll(':scope > tag-tabs > tag-tab');
        let categoryArray = Array.prototype.slice.call(categoryTabs);
        let categoryIndex = categoryArray.indexOf(categoryTab);
        categoryTabs.forEach(tab => tab.style.left = `${-100 * categoryIndex}%`);
        categoryLabel.classList.add('is-active');
        categoryTab.classList.add('is-active');
    } else {
        let categoryTabs = document.querySelectorAll('.webpage--wrap > tag-tabs > tag-tab');
        categoryTabs.forEach(tab => tab.style.left = `0%`);
    }

    //subcategory level
    let subcategoryLabel = document.querySelector(`tag-label[data-subcategory="${label.dataset.subcategory}"]`);
    if(subcategoryLabel) {
        let subcategoryTab = document.querySelector(`tag-tab[data-subcategory="${label.dataset.subcategory}"]`);
        let subcategoryTabs = subcategoryLabel.parentNode.parentNode.parentNode.querySelectorAll(':scope > tag-tabs > tag-tab');
        let subcategoryArray = Array.prototype.slice.call(subcategoryTabs);
        let subcategoryIndex = subcategoryArray.indexOf(subcategoryTab);
        subcategoryTabs.forEach(tab => tab.style.left = `${-100 * subcategoryIndex}%`);
        subcategoryLabel.classList.add('is-active');
        subcategoryTab.classList.add('is-active');
    } else {
        let subcategoryTabs = document.querySelectorAll('.webpage--wrap > tag-tabs > tag-tabs > tag-tab');
        subcategoryTabs.forEach(tab => tab.style.left = `0%`);
    }

    window.location.hash = label.dataset.innerTab;
}
function initFirstTab() {
    let menus = document.querySelectorAll('tag-labels');
    menus.forEach(menu => {
        menu.querySelectorAll('tag-label')[0].classList.add('is-active');
    });
}
function initUCPMenu(pageType) {
    let ucpMain = `<div class="ucp--main-menu">
        <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
        <tag-labels>
            <tag-label tabindex="0" data-tab="account">Account</tag-label>
            <tag-label tabindex="0" data-tab="messages">Messages</tag-label>
            <tag-label tabindex="0" data-tab="tracking">Tracking</tag-label>
            <tag-label tabindex="0" data-tab="settings">Settings</tag-label>
        </tag-labels>
        <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
    </div>`;
    let ucpSecondary = `<tag-tabs class="ucp--secondary-menu">
        <tag-tab data-tab="account">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=UserCP&CODE=01" data-category="account" data-inner-tab="edit-profile" data-code="code-01">Edit Profile</a>
                        <a href="?act=UserCP&CODE=24" data-category="account" data-inner-tab="update-avatar" data-code="code-24">Update Avatar</a>
                        <a href="?act=UserCP&CODE=54" data-category="account" data-inner-tab="subaccounts" data-code="code-54">Sub-Accounts</a>
                        <a href="?act=UserCP&CODE=52" data-category="account" data-inner-tab="edit-username" data-code="code-52">Edit Username</a>
                        <a href="?act=UserCP&CODE=28" data-category="account" data-inner-tab="change-password" data-code="code-28">Change Password</a>
                        <a href="?act=UserCP&CODE=08" data-category="account" data-inner-tab="update-email" data-code="code-08">Update Email</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
        <tag-tab data-tab="messages">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=Msg&CODE=01" data-category="messages" data-inner-tab="inbox" data-code="code-01">Inbox</a>
                        <a href="?act=Msg&CODE=04" data-category="messages" data-inner-tab="send-message" data-code="code-04">Send Message</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
        <tag-tab data-tab="tracking">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=UserCP&CODE=alerts" data-category="tracking" data-inner-tab="alerts" data-code="code-alerts">Alerts</a>
                        <a href="?act=UserCP&CODE=50" data-category="tracking" data-inner-tab="forums" data-code="code-50">Forums</a>
                        <a href="?act=UserCP&CODE=26" data-category="tracking" data-inner-tab="topics" data-code="code-26">Topics</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
        <tag-tab data-tab="settings">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=UserCP&CODE=04" data-category="settings" data-inner-tab="board-settings" data-code="code-04">Board Settings</a>
                        <a href="?act=UserCP&CODE=alerts_settings" data-category="settings" data-inner-tab="alert-settings" data-code="code-alerts_settings">Alert Settings</a>
                        <a href="?act=UserCP&CODE=02" data-category="settings" data-inner-tab="email-settings" data-code="code-02">Email Settings</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
    </tag-tabs>`;
    
    document.querySelector('#ucpmenu').innerHTML = ucpMain;
    document.querySelector('#ucpcontent').innerHTML = `${ucpSecondary}<div class="ucp--wrapper scroll">
        ${document.querySelector('#ucpcontent').innerHTML}
    </div>`;


    initUCPTabs(pageType);
}
function initUCPTabs(pageType) {
    //select appropriate labels (main and secondary)
    let classes = document.querySelector('body').classList;
    let mainLabel, subLabel;
    if(pageType === 'UserCP') {
        if(classes.contains('code-01')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-01"]`)
        } else if(classes.contains('code-24')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-24"]`)
        } else if(classes.contains('code-54')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-54"]`)
        } else if(classes.contains('code-52')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-52"]`)
        } else if(classes.contains('code-28')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-28"]`)
        } else if(classes.contains('code-08')) {
            mainLabel = document.querySelector(`tag-label[data-tab="account"]`);
            subLabel = document.querySelector(`a[data-category="account"][data-code="code-08"]`)
        } else if(classes.contains('code-alerts')) {
            mainLabel = document.querySelector(`tag-label[data-tab="tracking"]`);
            subLabel = document.querySelector(`a[data-category="tracking"][data-code="code-alerts"]`)
        } else if(classes.contains('code-50')) {
            mainLabel = document.querySelector(`tag-label[data-tab="tracking"]`);
            subLabel = document.querySelector(`a[data-category="tracking"][data-code="code-50"]`)
        } else if(classes.contains('code-26')) {
            mainLabel = document.querySelector(`tag-label[data-tab="tracking"]`);
            subLabel = document.querySelector(`a[data-category="tracking"][data-code="code-26"]`)
        } else if(classes.contains('code-alerts_settings')) {
            mainLabel = document.querySelector(`tag-label[data-tab="settings"]`);
            subLabel = document.querySelector(`a[data-category="settings"][data-code="code-alerts_settings"]`)
        } else if(classes.contains('code-04')) {
            mainLabel = document.querySelector(`tag-label[data-tab="settings"]`);
            subLabel = document.querySelector(`a[data-category="settings"][data-code="code-04"]`)
        } else if(classes.contains('code-02')) {
            mainLabel = document.querySelector(`tag-label[data-tab="settings"]`);
            subLabel = document.querySelector(`a[data-category="settings"][data-code="code-02"]`)
        }
    } else {
        mainLabel = document.querySelector(`tag-label[data-tab="messages"]`);
        if(classes.contains('code-04')) {
            subLabel = document.querySelector(`a[data-category="messages"][data-code="code-04"]`)
        } else if(classes.contains('code-01')) {
            subLabel = document.querySelector(`a[data-category="messages"][data-code="code-01"]`)
        }
    }

    //set consistent
    let mainLabels = document.querySelectorAll('#ucpmenu tag-label');
    let subLabels = document.querySelectorAll('tag-tab tag-label');
    let tabs = document.querySelectorAll('tag-tabs > tag-tab');
    let labelsArray = Array.prototype.slice.call(mainLabels);
    let index = labelsArray.indexOf(mainLabel);

    mainLabel.classList.add('is-active');
    subLabel.classList.add('is-active');
    tabs.forEach(tab => {
        tab.classList.remove('is-active');
        tab.style.left = `${-100 * index}%`;
    });

    //click events
    mainLabels.forEach((label, i) => {
        label.addEventListener('click', e => {
            mainLabels.forEach(sibling => sibling.classList.remove('is-active'));
            subLabels.forEach(sublabel => sublabel.classList.remove('is-active'));
            tabs.forEach(tab => {
                tab.classList.remove('is-active');
                tab.style.left = `${-100 * i}%`;
            });
            label.classList.add('is-active');
            tabs[i].classList.add('is-active');
        });
    });
}
function initUCPEdit() {
    const toggleFields = [document.querySelector('#field_74_input'), document.querySelector('#field_75_input')];
	$('#field-birthday').insertAfter('#field_34');
      
    cpShift();
        
    toggleFields.forEach(toggle => {
        toggle.addEventListener('change', () => {
            cpShift();
        });
    });

    document.querySelectorAll('#ucpcontent form[name="theForm"] input[type="text"]').forEach(input => {
        let label = input.getAttribute('id');
        if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText.toLowerCase());
        }
    });

    document.querySelectorAll('#ucpcontent form[name="theForm"] textarea').forEach(input => {
        let label = input.getAttribute('id');
        if(document.querySelector('label[for="' + label + '"]')) {
                input.setAttribute('placeholder', document.querySelector('label[for="' + label + '"]').innerText.toLowerCase());
        }
    });
}
function initStoreMenu() {
    let ucpMain = `<div class="ucp--main-menu">
        <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
        <tag-labels>
            <tag-label tabindex="0" data-tab="personal">Personal</tag-label>
            <tag-label tabindex="0" data-tab="shop">Shop</tag-label>
            <tag-label tabindex="0" data-tab="manage">Management</tag-label>
        </tag-labels>
        <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
    </div>`;
    let ucpSecondary = `<tag-tabs class="ucp--secondary-menu">
        <tag-tab data-tab="personal">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=store&CODE=inventory" data-category="personal" data-path="inventory">Inventory</a>
                        <a href="?act=store&code=donate_money" data-category="personal" data-path="donate_money">Send Galleons</a>
                        <a href="?act=store&code=donate_item" data-category="personal" data-path="donate_item">Gift Awards</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
        <tag-tab data-tab="shop">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="?act=store" data-category="shop" data-path="store">Categories</a>
                        <a href="?act=store&code=shop&category=5" data-category="shop" data-path="category5">Appreciation</a>
                        <a href="?act=store&code=shop&category=2" data-category="shop" data-path="category2">Education</a>
                        <a href="?act=store&code=shop&category=6" data-category="shop" data-path="category6">Events</a>
                        <a href="?act=store&code=shop&category=1" data-category="shop" data-path="category1">Features & Occupations</a>
                        <a href="?act=store&code=shop&category=7" data-category="shop" data-path="category7">Longevity</a>
                        <a href="?act=store&code=shop&category=9" data-category="shop" data-path="category9">Posting</a>
                        <a href="?act=store&code=shop&category=8" data-category="shop" data-path="category8">Productivity</a>
                        <a href="?act=store&code=shop&category=3" data-category="shop" data-path="category3">Relationship Status</a>
                        <a href="?act=store&code=shop&category=4" data-category="shop" data-path="category4">Traits & Other</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
        <tag-tab data-tab="manage">
            <div class="ucp--tabs auto-height">
                <div class="ucp--labels">
                    <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                    <tag-labels>
                        <a href="store-fine.html" data-category="manage" data-path="fine">Fine</a>
                        <a href="store-editpoints.html" data-category="manage" data-path="edit_points">Edit Galleons</a>
                        <a href="store-edititems.html" data-category="manage" data-path="edit_inventory">Edit Inventory</a>
                    </tag-labels>
                    <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
                </div>
            </div>
        </tag-tab>
    </tag-tabs>`;
    
    document.querySelector('#ucpmenu').innerHTML = ucpMain;
    document.querySelector('#ucpcontent').innerHTML = `${ucpSecondary}<div class="ucp--wrapper scroll">
        ${document.querySelector('#ucpcontent').innerHTML}
    </div>`;


    initStoreTabs();
}
function initStoreTabs() {
    //select appropriate labels (main and secondary)
    let path = window.location.pathname;
    let mainLabel, subLabel;
    if(path.includes('inventory')) {
        mainLabel = document.querySelector(`tag-label[data-tab="personal"]`);
        subLabel = document.querySelector(`a[data-category="personal"][data-path="inventory"]`);
    } else if(path.includes('sendmoney')) {
        mainLabel = document.querySelector(`tag-label[data-tab="personal"]`);
        subLabel = document.querySelector(`a[data-category="personal"][data-path="donate_money"]`);
    } else if(path.includes('senditem')) {
        mainLabel = document.querySelector(`tag-label[data-tab="personal"]`);
        subLabel = document.querySelector(`a[data-category="personal"][data-path="donate_item"]`);
    } else if(path.includes('category=1')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category1"]`);
    } else if(path.includes('category=2')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category2"]`);
    } else if(path.includes('category=3')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category3"]`);
    } else if(path.includes('category=4')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category4"]`);
    } else if(path.includes('category=5')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category5"]`);
    } else if(path.includes('category=6')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category6"]`);
    } else if(path.includes('category=7')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category7"]`);
    } else if(path.includes('category=8')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category8"]`);
    } else if(path.includes('category=9')) {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="category9"]`);
    } else if(path.includes('fine')) {
        mainLabel = document.querySelector(`tag-label[data-tab="manage"]`);
        subLabel = document.querySelector(`a[data-category="manage"][data-path="fine"]`)
    } else if(path.includes('editpoints')) {
        mainLabel = document.querySelector(`tag-label[data-tab="manage"]`);
        subLabel = document.querySelector(`a[data-category="manage"][data-path="edit_points"]`)
    } else if(path.includes('edititems')) {
        mainLabel = document.querySelector(`tag-label[data-tab="manage"]`);
        subLabel = document.querySelector(`a[data-category="manage"][data-path="edit_inventory"]`)
    } else {
        mainLabel = document.querySelector(`tag-label[data-tab="shop"]`);
        subLabel = document.querySelector(`a[data-category="shop"][data-path="store"]`);
    }

    //set consistent
    let mainLabels = document.querySelectorAll('#ucpmenu tag-label');
    let subLabels = document.querySelectorAll('tag-tab tag-label');
    let tabs = document.querySelectorAll('tag-tabs > tag-tab');
    let labelsArray = Array.prototype.slice.call(mainLabels);
    let index = labelsArray.indexOf(mainLabel);

    mainLabel.classList.add('is-active');
    subLabel.classList.add('is-active');
    tabs.forEach(tab => {
        tab.classList.remove('is-active');
        tab.style.left = `${-100 * index}%`;
    });

    //click events
    mainLabels.forEach((label, i) => {
        label.addEventListener('click', e => {
            mainLabels.forEach(sibling => sibling.classList.remove('is-active'));
            subLabels.forEach(sublabel => sublabel.classList.remove('is-active'));
            tabs.forEach(tab => {
                tab.classList.remove('is-active');
                tab.style.left = `${-100 * i}%`;
            });
            label.classList.add('is-active');
            tabs[i].classList.add('is-active');
        });
    });
}
function initCopyLink() {
    let clippedURL = new Clipboard('.post-link');
    document.querySelectorAll('.post-link').forEach(link => {
        link.addEventListener('click', e => {
            e.currentTarget.querySelector('.note').style.opacity = 1;
            setTimeout(() => {
                document.querySelectorAll('.note').forEach(note => note.style.opacity = 0);
            }, 3000);
        });
    });
}
function cpShift() {
	let appType = document.querySelector('#field_75_input').value,
	    account = document.querySelector('#field_74_input').value,
	    showFields = [],
	    hideFields = [],
	    showHeaders = allHeaders;

	if(account == 'char') {

		if(appType == 'trad') {
			showFields = charAll.concat(charTrad).concat(hasFreeform);
			hideFields = charBasic;
			showHeaders = showHeaders.concat(tradHeaders);
		}
		else if(appType == 'sim') {
			showFields = charAll.concat(charBasic).concat(hasFreeform);
			hideFields = charTrad;
			showHeaders = showHeaders.concat(simHeaders);
		}
		else if(appType == 'bas') {
			showFields = charAll.concat(charBasic);
			hideFields = charTrad.concat(hasFreeform);
			showHeaders = showHeaders.concat(basicHeaders);
		}
		else {
			showFields = [];
			hideFields = charAll.concat(charTrad).concat(charBasic).concat(hasFreeform);
		}

		showHeaders = showHeaders.concat(charHeaders);
		adjustCP(showFields, hideFields, showHeaders);

	} else {
		showFields = [];
		hideFields = charAll.concat(charTrad).concat(charBasic).concat(hasFreeform);
		adjustCP(showFields, hideFields, showHeaders);
	}
}
function adjustCP(show, hide, headers) {
	show.forEach(field => {
		showAccField(field);
	});
	hide.forEach(field => {
		hideAccField(field);
	});
	document.querySelectorAll('.ucp--header').forEach(header => {
		header.remove();
	});
	headers.forEach(header => {
		insertCPHeader(header['title'], header['insertBefore']);
	});
}

//Utilities
function highlightCode() {
    let clipcodeQuick = new Clipboard('.copyQuick', {
        target: function(trigger) {
            if(trigger.nextElementSibling.querySelector('textarea')) {
                return trigger.nextElementSibling.querySelector('textarea');
            } else {
                return trigger.nextElementSibling.querySelector('code');
            }
        }
    });
}
function moveLeft(e) {
    e.parentNode.querySelector('tag-labels').scrollLeft -= 150;
}
function moveRight(e) {
    e.parentNode.querySelector('tag-labels').scrollLeft += 150;
}
function fixMc(str) {
    return (""+str).replace(/Mc(.)/g, function(m, m1) {
        return 'Mc' + m1.toUpperCase();
    });
}
function fixMac(str) {
    return (""+str).replace(/Mac(.)/g, function(m, m1) {
        return 'Mac' + m1.toUpperCase();
    });
}
function capitalize(str, separators = [` `, `'`, `-`]) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return fixMac(fixMc(str.replace(regex, function(x) { return x.toUpperCase(); })));
}
function capitalizeMultiple(selector) {
    document.querySelectorAll(selector).forEach(character => {
        character.innerText = capitalize(character.innerText);
    });
}
function getAllTextNodes(element) {
    if(element) {
        return Array.from(element.childNodes).filter(node => node.nodeType === 3 && node.textContent.trim().length > 1);
    }
}
function inputWrap(el, next = null) {
    if(next) {
        $(el).nextUntil(next).andSelf().wrapAll(`<label class="input-wrap"></label>`);
    } else {
        $(el).next().andSelf().wrapAll(`<label class="input-wrap"></label>`);
    }
}
function fancyBoxes(type = 'checkbox') {
    if(type === 'checkbox') {
        document.querySelectorAll('.input-wrap').forEach(label => {
            label.querySelector('input').insertAdjacentHTML('afterend', `<div class="fancy-input checkbox"><i class="fa-regular fa-check"></i></div>`);
        });
    } else if (type === 'radio') {
        document.querySelectorAll('.input-wrap').forEach(label => {
            label.querySelector('input').insertAdjacentHTML('afterend', `<div class="fancy-input radio"><i class="fa-regular fa-check"></i></div>`);
        });
    }
}
function hideAccField(field) {
	if(document.querySelector(field)) {
		document.querySelector(field).classList.add('hide');
	}
}
function showAccField(field) {
	if(document.querySelector(field)) {
		document.querySelector(field).classList.remove('hide');
	}
}
function insertCPHeader (title, field, identifier) {
	$(field).before(`<tr class="pformstrip ucp--header"><td>${title}</td></tr>`);
}

//Filters
function filterValue(e) {
    let searchValue = e.value.toLowerCase().trim();
    let names = document.querySelectorAll(`${e.dataset.filter} .claim ${e.dataset.objects}`);
    let headers = document.querySelectorAll(`${e.dataset.filter} ${e.dataset.headers}`);
    if(searchValue !== '') {
        e.parentNode.classList.add('pb');
        headers.forEach(header => header.classList.add('hide'));
        names.forEach(name => {
            let nameValue = name.innerText.toLowerCase().trim();
            if (nameValue.indexOf(searchValue) > -1) {
                name.parentElement.classList.remove('hide');
            } else {
                name.parentElement.classList.add('hide');
            }
        });
    } else {
        e.parentNode.classList.remove('pb');
        headers.forEach(header => header.classList.remove('hide'));
        names.forEach(name => name.parentElement.classList.remove('hide'))
    }
}

//Specialized
function checkFaces() {
    let claimSheet = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
    let wipSheet = `https://opensheet.elk.sh/1W-Ffhi7pIe4X1X_tt1SoYaasEewx7Hk5IPd5EJZllOI/Sheet1`;
    fetch(claimSheet)
    .then((response) => response.json())
    .then((claimedData) => {
        fetch(wipSheet)
        .then((response) => response.json())
        .then((reservedData) => {
            let claimed = claimedData.map(item => item.Face.toLowerCase());
            let reserved = reservedData.map(item => item.Face.toLowerCase());
            let overlap = [];
            reserved.forEach(face => {
                if(claimed.includes(face)) {
                    overlap.push(`<li>${capitalize(face, [` `, `'`, `-`])}</li>`);
                }
            });
            let container = document.querySelector('.clip-reserve-check');
            overlap.sort();
            let html = ``;
            if(overlap.length > 0) {
                html = `<h3 class="h4">Remove the following reserves:</h3><ul>`;
                overlap.forEach(face => html += face);
                html += `</ul>`;
            } else {
                html = `<p>There are no reserved faces that are also on the claims list.</p>`;
            }
            container.insertAdjacentHTML('beforeend', html);
        });
    });
}
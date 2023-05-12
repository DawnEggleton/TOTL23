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

//Global
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
function capitalize(str, separators) {
    separators = separators || [ ' ' ];
    var regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.replace(regex, function(x) { return x.toUpperCase(); });
}
function capitalizeMultiple(selector) {
    document.querySelectorAll(selector).forEach(character => {
        character.innerText = capitalize(character.innerText, [` `, `'`, `-`]);
    });
}
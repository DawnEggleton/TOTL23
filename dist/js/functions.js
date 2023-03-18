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
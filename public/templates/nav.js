/*
Put your nav HTML between the backticks below and it will auto-populate on all pages of this local copy. It has been pre-populated with the HTML of the Jcink nav strip.
*/

const navHTML = `<nav class="nav nav--top">
        <div id="navstrip" align="left"><a href="index.html">turn on the light</a><i class="fa-regular fa-ellipsis-h"></i><a href="topiclist.html">A Test Category</a><i class="fa-regular fa-ellipsis-h"></i>A Test Forum</div>
    </nav>
    <nav class="nav nav--side-left">
        <button class="nav--menu-icon" title="Toggle Menu" onClick="toggleMenu()"><span></span></button>
        <button class="nav--settings-icon" title="Change Settings" onClick="toggleSettings()"><i class="fa-solid fa-gear"></i></button>
        <a href="profile.html" title="View Profile" class="memOnly"><i class="fa-solid fa-user"></i></a>
        <a href="usercp/user-edit.html" title="Edit Profile" class="memOnly"><i class="fa-solid fa-pencil"></i></a>
        <a href="usercp/user-inbox.html" title="Inbox (0)" data-new="0" class="memOnly"><i class="fa-solid fa-envelope"></i></a>
        <a href="#" title="Alerts (0)" data-new="0" class="memOnly"><i class="fa-solid fa-bell"></i></a>
        <a href="defaults/login.html" title="Logout" class="memOnly"><i class="fa-solid fa-power-off"></i></a>
        <a href="defaults/register1.html" title="Register" class="guestOnly"><i class="fa-solid fa-user-plus"></i></a>
        <a href="defaults/login.html" title="Login" class="guestOnly"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
        <a href="webpage.html" title="Guidebook & Claims"><i class="fa-solid fa-book"></i></a>
        <a href="https://docs.google.com/spreadsheets/d/1TDeGPXHSyZ1D97Vbx5lK9kkMnczVZRqbg9HQ9R42nmA/edit#gid=0" title="Thread Tracker" target="_blank"><i class="fa-solid fa-list-ul"></i></a>
        <a href="post.html" title="Code Bank"><i class="fa-solid fa-code"></i></a>
        <a href="store/store.html" title="Store" class="memOnly"><i class="fa-solid fa-store"></i></a>
        <a href="https://discord.gg/ftMsBg8Eg9" title="Discord"><i class="fa-brand fa-discord"></i></a>
        <a href="/admin.php" target="_blank" title="Admin Panel" class="staffOnly"><i class="fa-solid fa-tools"></i></a>
    </nav>
    <nav class="nav nav--side-right">
        <a href="#to-top"><i class="fa-solid fa-angle-up"></i></a>
        <a href="index.html"><i class="fa-solid fa-home"></i></a>
        <a href="#to-bottom"><i class="fa-solid fa-angle-down"></i></a>
    </nav>
    <nav class="nav nav--main-toggle">
        <div class="scroll">
            <tag-code>
                <button onclick="highlightCode()" class="copyQuick">copy</button>
                <pre><textarea class="scroll">[dohtml]<span class=""><div class="sslp-wrap quote">Quote<tag>— Source</tag></div></span>[/dohtml]</textarea></pre>
            </tag-code>
            <tag-code>
                <button onclick="highlightCode()" class="copyQuick">copy</button>
                <pre><textarea class="scroll">second code</textarea></pre>
            </tag-code>
            <a href="">Custom Link</a>
            <a href="">Custom Link</a>
            <a href="">Custom Link</a>
        </div>
    </nav>
    <nav class="nav nav--settings-toggle">
        <button class="toggle--theme" onClick="toggleTheme()">
            <b>Dark Mode</b>
            <div><span></span></div>
        </button>
        <button class="toggle--size" onClick="toggleSize()">
            <b>Increase Font</b>
            <div><span></span></div>
        </button>
    </nav>`;

document.querySelector('#clip-nav').innerHTML = navHTML;

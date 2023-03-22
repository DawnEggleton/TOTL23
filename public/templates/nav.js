/*
Put your nav HTML between the backticks below and it will auto-populate on all pages of this local copy. It has been pre-populated with the HTML of the Jcink nav strip.
*/

const navHTML = `<nav class="nav nav--top">
        <div id="navstrip" align="left"><a href="index.html">turn on the light</a><i class="fa-regular fa-ellipsis-h"></i><a href="topiclist.html">A Test Category</a><i class="fa-regular fa-ellipsis-h"></i>A Test Forum</div>
    </nav>
    <nav class="nav nav--side-left">
        <button class="nav--menu-icon popout--toggle" title="Toggle Menu" onClick="toggleMenu()"><span></span></button>
        <button class="nav--settings-icon popout--toggle" title="Change Settings" onClick="toggleSettings()"><i class="fa-solid fa-gear"></i></button>
        <button class="nav--profile-icon popout--toggle memOnly" title="User Options" onClick="toggleProfile()"><i class="fa-solid fa-user"></i><i class="fa-solid fa-user-xmark"></i></button>
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
    <nav class="nav popout nav--main-toggle">
        <div class="scroll">
            <tag-code>
                <button onclick="highlightCode()" class="copyQuick">copy</button>
                <pre><textarea class="scroll">[dohtml]<span class=""><div class="sslp-wrap quote">Quote<tag>— Source</tag></div></span>[/dohtml]</textarea></pre>
            </tag-code>
            <tag-code>
                <button onclick="highlightCode()" class="copyQuick">copy</button>
                <pre><textarea class="scroll">second code</textarea></pre>
            </tag-code>
            <a href="profile.html">Traditional Profile</a>
            <a href="profile-simplified.html">Simplified Profile</a>
            <a href="profile-basic.html">Basic Profile</a>
            <a href="profile-member.html">Member Profile</a>
        </div>
    </nav>
    <nav class="nav popout nav--settings-toggle">
        <button class="toggle--theme" onClick="toggleTheme()">
            <b>Dark Mode</b>
            <div><span></span></div>
        </button>
        <button class="toggle--size" onClick="toggleSize()">
            <b>Increase Font</b>
            <div><span></span></div>
        </button>
    </nav>
    <nav class="nav popout nav--profile-toggle">
        <a href="profile.html" class="popout--name">Duncan O'Donnelly-Taggart</a>
        <div class="popout--switch">
            <a href="profile.html"><img src="https://files.jcink.net/uploads/lovetheadrenaline/ezgif_1_de0876af5db2.jpg" /></a>
            <span id="subaccounts_menu">
                <form action="https://totl.jcink.net/index.php?&amp;act=Login&amp;CODE=01&amp;CookieDate=1" name="subswitch" method="POST">
                <input type="hidden" name="auth_key" value="c7667d50c5de503233d4240de12e6b54">
                <input type="hidden" name="UserName" value="subacct">
                <input type="hidden" name="PassWord" value="subacct">
                <input type="hidden" name="referer" value="act=UserCP&amp;CODE=01">
                <select class="forminput" name="sub_id" onchange="this.form.submit()">
                <option value="------------" selected="selected">Switch Account</option>
                <option value="1608"> abigail amesbury </option><option value="157"> adaline fawley </option><option value="838"> aiden mitchell </option><option value="1571"> ainara garcía rodríguez </option><option value="1093"> alastair knox </option><option value="995"> ambrose eaton </option><option value="856"> antoni rudaski </option><option value="669"> archer reid </option><option value="1567"> art abbott </option><option value="1147"> avery hayes </option><option value="261"> basil wilder </option><option value="1575"> benji aalto </option><option value="670"> bryn williams </option><option value="1146"> cameron towner </option><option value="855"> catarina delgado ferreira </option><option value="57"> connor king </option><option value="349"> cordelia hutchison </option><option value="1569"> daniel navarro </option><option value="395"> darcy de león </option><option value="906"> diana crawford </option><option value="1578"> diego serrano alvarez </option><option value="408"> draco malfoy </option><option value="58"> duncan taggart </option><option value="705"> ellis hill </option><option value="273"> emmalina fawley </option><option value="317"> evangeline carrow </option><option value="1577"> everest wilkes </option><option value="588"> felicity osborne </option><option value="901"> gavin dunbar </option><option value="587"> genevieve fink </option><option value="1565"> grace rowle </option><option value="1576"> graeme marshall </option><option value="1356"> griffin proudfoot </option><option value="836"> hallie rhodes </option><option value="1357"> harry mcdougall </option><option value="750"> heiko reynders </option><option value="1088"> hiroki becker </option><option value="1354"> holly harlan </option><option value="1145"> irina saidova </option><option value="1572"> jacob armstrong </option><option value="264"> jasper winslowe </option><option value="1573"> jeremiah baddock </option><option value="1568"> jonah goldman </option><option value="1324"> kristopher marchbanks </option><option value="1355"> lance austen </option><option value="1570"> leon wright </option><option value="315"> lottie fox </option><option value="1359"> lucas shycroft </option><option value="56"> magnolia atwood </option><option value="853"> malcolm murdock </option><option value="903"> malik emerson </option><option value="1089"> marica kovac </option><option value="112"> milo nott </option><option value="59"> montana quinn </option><option value="905"> nayara castellano cortez </option><option value="54"> nikolas kovac </option><option value="902"> nimue dunbar </option><option value="314"> noah clark </option><option value="482"> percy weasley </option><option value="1579"> peyton kennedy </option><option value="854"> raphael amesbury </option><option value="994"> rebecca warrington </option><option value="1564"> rebekah orpington </option><option value="1566"> reid cauldwell </option><option value="701"> renata orsini </option><option value="589"> ryan winters </option><option value="904"> salih binici </option><option value="1358"> sarah zhang </option><option value="1574"> sawyer coleman </option><option value="265"> simon flynn </option><option value="702"> sorren laugharne </option><option value="862"> spencer al-nazari </option><option value="907"> sterling de mitri </option><option value="863"> thomas urquart </option><option value="60"> tobias fletcher </option><option value="1148"> william talbot </option>
                </select>
                </form>
            </span>
        </div>
        <a href="profile.html" class="btn btn--arrow">View Profile</a>
    </nav>`;

document.querySelector('#clip-nav').innerHTML = navHTML;

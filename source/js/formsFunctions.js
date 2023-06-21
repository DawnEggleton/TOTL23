function openHelp(e) {
    e.classList.toggle('show');
    e.parentNode.parentNode.querySelector('.help').classList.toggle('show');
}
function setGroup(id) {
    let form = document.querySelector('#newsort');
    switch (id) {
        case '7':
        case '9':
        case '14':
        case '16':
            form.querySelectorAll('.ifStudent').forEach(field => field.classList.remove('hide'));
            form.querySelectorAll('.ifAdult, .ifJob, .ifUni').forEach(field => field.classList.add('hide'));
            break;
        case '17':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            let canon = document.querySelector('#sort-canon');
            setShowHide(canon.options[canon.selectedIndex].value, '.ifReturn');
            break;
        case '18':
        case '15':
        case '8':
        case '12':
        case '11':
        case '13':
        case '6':
            form.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            form.querySelectorAll('.ifAdult').forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll('.ifAdult, .ifJob, .ifUni, .ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership').forEach(field => field.classList.add('hide'));
            break;
    }
}
function setShowHide(value, classList) {
    let form = document.querySelector('#newsort');
    switch (value) {
        case 'y':
            form.querySelectorAll(classList).forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll(classList).forEach(field => field.classList.add('hide'));
            break;
    }
}
function setCheckShowHide(value, classList, form) {
    switch (value) {
        case true:
            form.querySelectorAll(classList).forEach(field => field.classList.remove('hide'));
            break;
        default:
            form.querySelectorAll(classList).forEach(field => field.classList.add('hide'));
            break;
    }
}
function addJobFields(i, formType) {
    let html = `<label class="form--job-section">
        <strong>Job Section</strong>
        <select name="${formType}-jobsection-${i}" id="${formType}-jobsection-${i}">
            <option value="">(select)</option>
            <option value="hogwarts">Hogwarts Castle</option>
            <option value="ministry">Ministry of Magic</option>
            <option value="mungos">St. Mungo's</option>
            <option value="sports">Professional Sports</option>
            <option value="prophet">The Daily Prophet</option>
            <option value="diagon">Diagon Alley</option>
            <option value="horizon">Horizon Alley</option>
            <option value="knockturn">Knockturn Alley</option>
            <option value="mythic">Mythic Alley</option>
            <option value="wizardlondon">Wizarding London (Other)</option>
            <option value="mugglelondon">Muggle London (Other)</option>
            <option value="hogsmeade">Hogsmeade</option>
            <option value="ilkley">Ilkley</option>
            <option value="elsewhere">Elsewhere</option>
            <option value="selfemployed">Self-Employed</option>
        </select>
    </label>
    <label class="form--job-sub-section">
        <strong>
            Job Sub-Section
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Equivalent to the grouping underneath the main tab. For example, in the Ministry, these are overarching departments. In Diagon Alley, these are individual businesses. For Professional sports players, ensure it mentions the league/level, if applicable, as well as the sport they play (e.g., British &amp; Irish Quidditch League or International Soccer). REQUIRED unless self-employed.</i>
        <input type="text" name="${formType}-jobsubsection-${i}" id="${formType}-jobsubsection-${i}" placeholder="Job Subsection">
    </label>
    <label class="form--job-line1">
        <strong>
            Job Info - Line 1
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Unless one of the following applies, this line is reserved for the job title/position of your character. Exceptions are: for Ministry personnel, if they are part of a specific sub-division or team under the overall department (e.g., the Hitwizard Team within Magical Law Enforcement), this team label goes here; for Hogwarts teaching staff, place their speciality; for Quidditch players, please name their team; or, if they are self-employed and have a specific business name. In these instances, place the job title/position in <b>line 2</b>.</i>
        <input type="text" name="${formType}-jobline1-${i}" id="${formType}-jobline1-${i}" placeholder="Job Info - Line 1, see help for specifics">
    </label>
    <label class="form--job-line2">
        <strong>
            Job Info - Line 2
            <button onclick="openHelp(this)" type="button">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </strong>
        <i class="help">Not applicable for characters who are not one of the exception in Line 1 above or are house-specific Hogwarts Staff (e.g., a House Parent). For those exceptions: for Ministry personnel or self-employed individuals, place their job title/position; for Hogwarts teaching staff, place the years they teach (e.g, Years One to Three); for Quidditch, use their position on the team. Additionally, if your character is Hogwarts Staff and is house-specific, please place the house affiliation.</i>
        <input type="text" name="${formType}-jobline2-${i}" id="${formType}-jobline2-${i}" placeholder="Job Info - Line 2, see help for specifics">
    </label>`;
    return html;
}
function setHogwartsYear(year) {
    let reqClip = document.querySelector('.form--reqclass-clip.form--sort');
    let elecClip = document.querySelector('.form--elecclass-clip.form--sort');
    switch(year) {
        case '1':
        case '2':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.add('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addStartClasses('sort'));
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('sort'));
            break;
        case '3':
        case '4':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('sort'));
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'sort'));
            break;
        case '5':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('sort'));
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'sort'));
            break;
        case '6':
        case '7':
            document.querySelectorAll('.ifElec').forEach(field => field.classList.remove('hide'));
            document.querySelectorAll('.ifLeadershipPossible').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(8, 4, true, 'sort'));
            break;
        default:
            break;
    }
}
function setHogwartsYearUpdate(year) {
    let reqClip = document.querySelector('.form--reqclass-clip.form--update');
    let elecClip = document.querySelector('.form--elecclass-clip.form--update');
    switch(year) {
        case '1':
        case '2':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.add('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addStartClasses('update'));
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('update'));
            break;
        case '3':
        case '4':
        case '5':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            reqClip.insertAdjacentHTML('beforeend', addCoreClasses('update'));
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(4, 2, false, 'update'));
            break;
        case '6':
        case '7':
            document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.remove('hide'));
            reqClip.innerHTML = '';
            elecClip.innerHTML = '';
            elecClip.insertAdjacentHTML('beforeend', addElecClasses(8, 4, true,'update'));
            break;
        default:
            break;
    }
}
function addStartClasses(formType) {
    let html = `
    <h2 class="fullWidth">Introductory Classes</h2>
    <label class="required">
        <strong>Culture Class</strong>
        <select name="${formType}-culture" id="${formType}-culture">
        <option value="">(select)</option>
        <option value="muggle">Muggle Studies</option>
        <option value="wizarding">Wizarding Culture</option>
        </select>
    </label>
    <label class="required">
        <strong>Culture Grade</strong>
        <select name="${formType}-culturegrade" id="${formType}-culturegrade">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Literacy</strong>
        <select name="${formType}-literacy" id="${formType}-literacy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Magical Theory</strong>
        <select name="${formType}-magicaltheory" id="${formType}-magicaltheory">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Maths</strong>
        <select name="${formType}-maths" id="${formType}-maths">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addCoreClasses(formType) {
    let html = `
    <h2 class="fullWidth">Core Classes</h2>
    <label class="required">
        <strong>Astronomy</strong>
        <select name="${formType}-astronomy" id="${formType}-astronomy">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Charms</strong>
        <select name="${formType}-charms" id="${formType}-charms">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Defence Against the Dark Arts</strong>
        <select name="${formType}-dada" id="${formType}-dada">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Games</strong>
        <select name="${formType}-games" id="${formType}-games">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Herbology</strong>
        <select name="${formType}-herbology" id="${formType}-herbology">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>History of Magic</strong>
        <select name="${formType}-historyofmagic" id="${formType}-historyofmagic">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Potions</strong>
        <select name="${formType}-potions" id="${formType}-potions">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>
    <label class="required">
        <strong>Transfiguration</strong>
        <select name="${formType}-transfiguration" id="${formType}-transfiguration">
        <option value="">(select)</option>
        <option value="o">Outstanding</option>
        <option value="e">Exceeds Expectations</option>
        <option value="a">Acceptable</option>
        <option value="p">Poor</option>
        <option value="d">Dreadful</option>
        <option value="t">Troll</option>
        </select>
    </label>`;
    return html;
}
function addElecClasses(count, min, upper, formType) {
    let html = ``;
    for(let i = 0; i < count; i++) {
        if (i < min) {
            html += `<label class="required">`;
        } else {
            html += `<label>`;
        }
        let options = `<option value="">(select)</option>
        <option value="runes">Ancient Runes</option>
        <option value="arithmancy">Arithmancy</option>
        <option value="art">Art</option>
        <option value="comc">Care of Magical Creatures</option>
        <option value="divination">Divination</option>
        <option value="magicaltheory">Magical Theory</option>
        <option value="mugglestudies">Muggle Studies</option>
        <option value="music">Music</option>`;
        if(upper) {
            options = `<option value="">(select)</option>
            <option value="alchemy">Alchemy</option>
            <option value="runes">Ancient Runes</option>
            <option value="ancientstudies">Ancient Studies</option>
            <option value="arithmancy">Arithmancy</option>
            <option value="art">Art</option>
            <option value="astronomy">Astronomy</option>
            <option value="comc">Care of Magical Creatures</option>
            <option value="charms">Charms</option>
            <option value="dada">Defence Against the Dark Arts</option>
            <option value="divination">Divination</option>
            <option value="games">Games</option>
            <option value="ghoulstudies">Ghoul Studies</option>
            <option value="herbology">Herbology</option>
            <option value="historyofmagic">History of Magic</option>
            <option value="magicaltheory">Magical Theory</option>
            <option value="mugglestudies">Muggle Studies</option>
            <option value="music">Music</option>
            <option value="potions">Potions</option>
            <option value="transfiguration">Transfiguration</option>
            <option value="xylomancy">Xylomancy</option>`;
        }
        html += `
            <strong>Course</strong>
            <select name="${formType}-elec${i}" id="${formType}-elec${i}">${options}</select>
        </label>`;
        if (i < min) {
            html += `<label class="required">`;
        } else {
            html += `<label>`;
        }
        html += `
            <strong>Grade</strong>
            <select name="${formType}-elec${i}grade" id="${formType}-elec${i}grade">
            <option value="">(select)</option>
            <option value="o">Outstanding</option>
            <option value="e">Exceeds Expectations</option>
            <option value="a">Acceptable</option>
            <option value="p">Poor</option>
            <option value="d">Dreadful</option>
            <option value="t">Troll</option>
            </select>
        </label>`;
    }
    return html;
}
function setUpdateOptions() {
    let faceChange = document.querySelector('#choice-face').checked;
    let addUni = document.querySelector('#choice-newuni').checked;
    let addAbility = document.querySelector('#choice-ability').checked;
    let addJobs = document.querySelector('#choice-newjob').checked;
    let changeJobs = document.querySelector('#choice-changejob').checked;
    let removeJobs = document.querySelector('#choice-removejob').checked;
    let changeClasses = document.querySelector('#choice-classes').checked;
    let changeQuid = document.querySelector('#choice-quidditch').checked;
    let changeLead = document.querySelector('#choice-leadership').checked;

    setCheckShowHide(faceChange, '.ifFace-Change', document.querySelector('#newedit'));
    setCheckShowHide(addUni, '.ifUni-Change', document.querySelector('#newedit'));
    setCheckShowHide(addAbility, '.ifAbSp-Add', document.querySelector('#newedit'));
    setCheckShowHide(addJobs, '.ifJob-Add', document.querySelector('#newedit'));
    setCheckShowHide(changeJobs, '.ifJob-Change', document.querySelector('#newedit'));
    setCheckShowHide(removeJobs, '.ifJob-Remove', document.querySelector('#newedit'));
    setCheckShowHide(changeClasses, '.ifStudent-Change', document.querySelector('#newedit'));
    setHogwartsYearUpdate(document.querySelector('#update-hwyear').options[document.querySelector('#update-hwyear').selectedIndex].value);
    setCheckShowHide(changeQuid, '.ifHogwartsQuidditch-Change', document.querySelector('#newedit'));
    setCheckShowHide(changeLead, '.ifLeadership-Change', document.querySelector('#newedit'));
    
    if(!changeClasses) {
        document.querySelectorAll('.ifElec-Change').forEach(field => field.classList.add('hide'));
    }

    if(changeJobs) {
        setJobChange(document.querySelector('.form--jobschange-clip.form--update'));
    }

    if(removeJobs) {
        setJobRemove(document.querySelector('.form--jobsremove-clip.form--update'));
    }
}
function setJobChange(clip) {
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let idExists = data.filter(item => item.AccountID === document.querySelector('#update-id').value).length > 0;
            
            if(idExists) {
                let character = data.filter(item => item.AccountID === document.querySelector('#update-id').value)[0];
                if(character.Jobs !== '') {
                    let jobs = character.Jobs.split('+').map(job => JSON.parse(job));
                    return jobs;
                } else {
                    clip.innerHTML = `<p class="fullWidth">This character does not have any jobs to change.</p>`;
                }
            } else {
                clip.innerHTML = `<p class="fullWidth">This character does not exist on the sheet. Please double check the ID entered.</p>`;
            }
        }).then((jobs) => {
            let html = ``;
            jobs.forEach((job, i) => {
                html += `<u class="fullWidth editJobs">${job.section} — ${job.subsection}</u>
                <label class="form--job-line1">
                <strong>
                    Job Info - Line 1
                    <button onclick="openHelp(this)" type="button">
                        <i class="fa-solid fa-circle-question"></i>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                </strong>
                <i class="help">Unless one of the following applies, this line is reserved for the job title/position of your character. Exceptions are: for Ministry personnel, if they are part of a specific sub-division or team under the overall department (e.g., the Hitwizard Team within Magical Law Enforcement), this team label goes here; for Hogwarts teaching staff, place their speciality; for Quidditch players, please name their team; or, if they are self-employed and have a specific business name. In these instances, place the job title/position in <b>line 2</b>.</i>
                <input type="text" name="change-jobline1-${i}" id="change-jobline1-${i}" placeholder="Job Info - Line 1, see help for specifics">
            </label>
            <label class="form--job-line2">
                <strong>
                    Job Info - Line 2
                    <button onclick="openHelp(this)" type="button">
                        <i class="fa-solid fa-circle-question"></i>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                </strong>
                <i class="help">Not applicable for characters who are not one of the exception in Line 1 above or are house-specific Hogwarts Staff (e.g., a House Parent). For those exceptions: for Ministry personnel or self-employed individuals, place their job title/position; for Hogwarts teaching staff, place the years they teach (e.g, Years One to Three); for Quidditch, use their position on the team. Additionally, if your character is Hogwarts Staff and is house-specific, please place the house affiliation.</i>
                <input type="text" name="change-jobline2-${i}" id="change-jobline2-${i}" placeholder="Job Info - Line 2, see help for specifics">
            </label>`;
            });
            clip.innerHTML = html;
        });
}
function setJobRemove(clip) {
    const url = `https://opensheet.elk.sh/146rEeh3eiyftnC-9NXF29rgSPRLAhuG2gss_nWp_xxw/NewClaims`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let idExists = data.filter(item => item.AccountID === document.querySelector('#update-id').value).length > 0;
            
            if(idExists) {
                let character = data.filter(item => item.AccountID === document.querySelector('#update-id').value)[0];
                if(character.Jobs !== '') {
                    let jobs = character.Jobs.split('+').map(job => JSON.parse(job));
                    return jobs;
                } else {
                    clip.innerHTML = `<p class="fullWidth">This character does not have any jobs to remove.</p>`;
                }
            } else {
                clip.innerHTML = `<p class="fullWidth">This character does not exist on the sheet. Please double check the ID entered.</p>`;
            }
        }).then((jobs) => {
            let html = `<div class="form-flex fullWidth">`;
            jobs.forEach((job, i) => {
                html += `<label class="input-wrap">
                    <input type="checkbox" name="remove-jobs" id="remove-job-${i}" value="remove-job-${i}">
                    <div class="fancy-input"><i class="fa-light fa-check"></i></div>
                    <span class="editJobs">${job.section}, ${job.subsection}`;
                if(job.line1 !== '') {
                    html += `, ${job.line1}`;
                }
                if(job.line2 !== '') {
                    html += `, ${job.line2}`;
                }
                html += `</span>
                </label>`;
            });
            html += `</div>`;
            clip.innerHTML = html;
        });
}
function formatLabel(category, subcategory, dataAtt, title) {
    if(subcategory) {
        return `<tag-label data-category="${category}" data-subcategory="${subcategory}" data-inner-tab="${dataAtt}" tabindex="0">${title}</tag-label>`;
    } else {
        return `<tag-label data-category="${category}" data-inner-tab="${dataAtt}" tabindex="0">${title}</tag-label>`;
    }
}
function formatTab(subcategory, dataAtt, content) {
    if(subcategory) {
        return `<tag-tab data-subcategory="${subcategory}" data-inner-tab="${dataAtt}">
            <div class="webpage--tab-inner">
                <div class="scroll">${content}</div>
            </div>
        </tag-tab>`;
    } else {
        return `<tag-tab data-inner-tab="${dataAtt}">
            <div class="webpage--tab-inner">
                <div class="scroll">${content}</div>
            </div>
        </tag-tab>`;
    }
}
function formatClaimHeader(level, title, className = null) {
    if(className) {
        return `<${level} class="${className}">${capitalize(title)}</${level}>`;
    }
    return `<${level}>${title}</${level}>`;
}
function formatClaimGrid(columns = 0, end = false) {
    if(end) {
        return `</div>`;
    }

    return `<div data-type="grid" data-columns="${columns}">`;
}
function formatClaimBox(group, id, name, lines) {
    let html = `<div class="claim g-${group}">
        <a href="?showuser=${id}">${capitalize(name)}</a>`;
    lines.forEach(line => {
        html += `<span>${line}</span>`;
    });
    html += `</div>`;

    return html;
}
function formatSimpleClaim(name, lines) {
    let html = `<div class="claim">
        <b>${capitalize(name)}</b>`;
    lines.forEach(line => {
        html += `<span>${line}</span>`;
    });
    html += `</div>`;

    return html;
}

function formatFaces(data) {
    let html = ``;
    data.sort((a, b) => {
        if (a.Face < b.Face) {
            return -1;
        } else if (b.Face < a.Face) {
            return 1;
        } else {
            return 0;
        }
    });
    data.forEach((character, i) => {
        //first character
        if (i === 0) {
            html += formatClaimGrid('3');
            html += formatClaimHeader('h3', character.Face[0], `fullWidth`);
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Face,
                [`Playing ${character.Character}`,
                `Played by ${character.Member}`]);
        }
        //different letter
        else if (i !== data.length - 1 && character.Face[0] !== data[i - 1].Face[0]) {
            html += formatClaimHeader('h3', character.Face[0], `fullWidth`);
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Face,
                [`Playing ${character.Character}`,
                `Played by ${character.Member}`]);
        }
        //same letter
        else if (i !== data.length - 1 && character.Face[0] === data[i - 1].Face[0]) {
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Face,
                [`Playing ${character.Character}`,
                `Played by ${character.Member}`]);
        }
        //close after last character
        if(i === data.length - 1) {
            html += formatClaimGrid('3', true);
        }
    });
    document.querySelector('#clip-faces').insertAdjacentHTML('beforeend', html);
}
function formatUpcoming(data) {
    let html = ``;
    data.sort((a, b) => {
        if (a.Face.toLowerCase() < b.Face.toLowerCase()) {
            return -1;
        } else if (b.Face.toLowerCase() < a.Face.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
    data.forEach((character, i) => {
        //first character
        if (i === 0) {
            html += formatClaimGrid('3');
            html += formatClaimHeader('h3', character.Face[0].toLowerCase(), `fullWidth`);
            html += formatSimpleClaim(character.Face.toLowerCase(),
                [`Claimed by ${character.Member}`]);
        }
        //same letter
        else if (i !== data.length - 1 && character.Face[0].toLowerCase() === data[i - 1].Face[0].toLowerCase()) {
            html += formatSimpleClaim(character.Face.toLowerCase(),
                [`Claimed by ${character.Member}`]);
        }
        //different letter
        else if (i !== data.length - 1 && character.Face[0].toLowerCase() !== data[i - 1].Face[0].toLowerCase()) {
            html += formatClaimHeader('h3', character.Face[0].toLowerCase(), `fullWidth`);
            html += formatSimpleClaim(character.Face.toLowerCase(),
                [`Claimed by ${character.Member}`]);
        }
        //close after last character
        if(i === data.length - 1) {
            html += formatClaimGrid('3', true);
        }
    });
    document.querySelector('#clip-wip').insertAdjacentHTML('beforeend', html);
}
function formatUniversities(data) {
    let html = ``;
    let students = data.filter(item => item.School);
    students.sort((a, b) => {
        if (a.School < b.School) {
            return -1;
        } else if (b.School < a.School) {
            return 1;
        } else if (a.Program < b.Program) {
            return -1;
        } else if (b.Program < a.Program) {
            return 1;
        } else if (a.UniversityYear === 'post-grad') {
            return 2;
        } else if (a.UniversityYear < b.UniversityYear) {
            return -1;
        } else if (b.UniversityYear < a.UniversityYear) {
            return 1;
        } else if (a.Character < b.Character) {
            return -1;
        } else if (b.Character < a.Character) {
            return 1;
        } else {
            return 0;
        }
    });
    students.forEach((character, i) => {
        //first character
        if (i === 0) {
            html += formatClaimGrid('3');
            html += formatClaimHeader('h3', character.School, `fullWidth`);
            html += formatClaimHeader('h4', character.Program, `fullWidth`);
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Character,
                [character.UniversityYear]);
        }
        //same school, different program
        else if (i !== students.length - 1 && character.School === students[i - 1].School && character.Program !== students[i - 1].Program) {
            html += formatClaimHeader('h4', character.Program, `fullWidth`);
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Character,
                [character.UniversityYear]);
        }
        //different school
        else if (i !== students.length - 1 && character.School !== students[i - 1].School) {
            html += formatClaimHeader('h3', character.School, `fullWidth`);
            html += formatClaimHeader('h4', character.Program, `fullWidth`);
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Character,
                [character.UniversityYear]);
        }
        //same school, same program
        else if (i !== students.length - 1 && character.School === students[i - 1].School && character.Program === students[i - 1].Program) {
            html += formatClaimBox(character.GroupID,
                character.AccountID,
                character.Character,
                [character.UniversityYear]);
        }
        //close after last character
        if(i === students.length - 1) {
            html += formatClaimGrid('3', true);
        }
    });
    document.querySelector('#clip-university').insertAdjacentHTML('beforeend', html);
}
function formatAbilitiesSpecies(data) {
    //set variables
    let labels = ``, tabs = ``, tabContent = ``, firstTab = ``, characters = [];

    //filter data and set up characters array
    let filtered = data.filter(item => item.AbilitiesSpecies);
    filtered.forEach(character => {
        let arr = character.AbilitiesSpecies.split(', ');
        arr.forEach(ability => {
            let abilityName, abilityDetail = null;
            if(ability.split(` (`).length > 1) {
                abilityName = ability.split(` (`)[0];
                abilityDetail = ability.split(` (`)[1].split(`)`)[0];
            } else {
                abilityName = ability;
            }
            characters.push({
                Character: character.Character,
                AccountID: character.AccountID,
                GroupID: character.GroupID,
                Ability: abilityName,
                Detail: abilityDetail
            });
        });
    });
    characters.sort((a, b) => {
        if (a.Ability < b.Ability) {
            return -1;
        } else if (b.Ability < a.Ability) {
            return 1;
        } else if (a.Character < b.Character) {
            return -1;
        } else if (b.Character < a.Character) {
            return 1;
        } else {
            return 0;
        }
    });

    //format html print out
    characters.forEach((character, i) => {
        //first character
        if (i === 0) {
            firstTab = `ability-${character.Ability.replaceAll(' ', '-')}`;
            tabContent += formatClaimGrid('3');
            tabContent += formatClaimHeader('h3', character.Ability, `fullWidth`);
            if(character.Detail) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Detail]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    []);
            }
        }
        //different ability
        else if (i !== characters.length - 1 && character.Ability !== characters[i - 1].Ability) {
            tabContent += formatClaimGrid('3', true);
            tabs += formatTab('abilities-species-claim', `ability-${characters[i - 1].Ability.replaceAll(' ', '-')}`, tabContent);
            labels += formatLabel('claims', 'abilities-species-claim', `ability-${characters[i - 1].Ability.replaceAll(' ', '-')}`, capitalize(characters[i - 1].Ability));
            tabContent = ``;
            tabContent += formatClaimGrid('3');
            tabContent += formatClaimHeader('h3', character.Ability, `fullWidth`);
            if(character.Detail) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Detail]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    []);
            }
        }
        //same ability
        else if (i !== characters.length - 1 && character.Ability === characters[i - 1].Ability) {
            if(character.Detail) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Detail]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    []);
            }
        }
        //close after last character
        if(i === characters.length - 1) {
            tabContent += formatClaimGrid('3', true);
            tabs += formatTab('abilities-species-claim', `ability-${character.Ability.replaceAll(' ', '-')}`, tabContent);
            labels += formatLabel('claims', 'abilities-species-claim', `ability-${character.Ability.replaceAll(' ', '-')}`, capitalize(character.Ability));
        }
    });

    //clip to page
    document.querySelector(`tag-label[data-tab="abilities-species-claim"]`).dataset.triggerTab = firstTab;
    document.querySelector('#clip-absp-labels').innerHTML = labels;
    document.querySelector('#clip-absp-tabs').innerHTML = tabs;
}
function formatJobs(data) {
    //set variables
    let labels = ``, tabs = ``, tabContent = ``, firstTab = ``, characters = [];

    //filter data and set up characters array
    let filtered = data.filter(item => item.Jobs);
    filtered.forEach(character => {
        let jobs = character.Jobs.split(`+`).map(job => JSON.parse(job));
        jobs.forEach(job => {
            let locationID = 0;
            if (job.section === 'ministry of magic') {
                locationID = 1;
            } else if (job.section === `st. mungo's`) {
                locationID = 2;
            } else if (job.section === `the daily prophet`) {
                locationID = 3;
            } else if (job.section === `diagon alley`) {
                locationID = 4;
            } else if (job.section === `horizon alley`) {
                locationID = 5;
            } else if (job.section === `knockturn alley`) {
                locationID = 6;
            } else if (job.section === `mythic alley`) {
                locationID = 7;
            } else if (job.section === `wizarding london (other)`) {
                locationID = 8;
            } else if (job.section === `muggle london (other)`) {
                locationID = 9;
            } else if (job.section === `hogwarts castle`) {
                locationID = 10;
            } else if (job.section === `hogsmeade`) {
                locationID = 11;
            } else if (job.section === `ilkley`) {
                locationID = 12;
            } else if (job.section === `elsewhere`) {
                locationID = 13;
            } else if (job.section === `professional sports`) {
                locationID = 14;
            } else if (job.section === `self-employed`) {
                locationID = 15;
            }
            characters.push({
                Character: character.Character,
                AccountID: character.AccountID,
                GroupID: character.GroupID,
                Location: job.section,
                LocationID: locationID,
                Employer: job.subsection !== '' ? job.subsection : 'self-employed',
                Line1: job.line2,
                Line2: job.line1 !== '' ? job.line1 : null
            });
        });
    });
    characters.sort((a, b) => {
        if (a.LocationID < b.LocationID) {
            return -1;
        } else if (b.LocationID < a.LocationID) {
            return 1;
        } else if (a.Employer < b.Employer) {
            return -1;
        } else if (b.Employer < a.Employer) {
            return 1;
        } else if (a.Line1 < b.Line1) {
            return -1;
        } else if (b.Line1 < a.Line1) {
            return 1;
        } else if (a.Line2 < b.Line2) {
            return -1;
        } else if (b.Line2 < a.Line2) {
            return 1;
        } else if (a.Character < b.Character) {
            return -1;
        } else if (b.Character < a.Character) {
            return 1;
        } else {
            return 0;
        }
    });

    //format html print out
    characters.forEach((character, i) => {
        //first character
        if (i === 0) {
            firstTab = `jobs-${character.Location.replaceAll(' ', '-')}`;
            tabContent += formatClaimGrid('3');
            tabContent += formatClaimHeader('h3', character.Employer, `fullWidth`);
            if(character.Line2) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1, character.Line2]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1]);
            }
        }
        //different location
        else if (i !== characters.length - 1 && character.Location !== characters[i - 1].Location) {
            tabContent += formatClaimGrid('3', true);
            tabs += formatTab(null, `jobs-${characters[i - 1].Location.replaceAll(' ', '-')}`, tabContent);
            labels += formatLabel('jobs', null, `jobs-${characters[i - 1].Location.replaceAll(' ', '-')}`, capitalize(characters[i - 1].Location));
            tabContent = ``;
            tabContent += formatClaimGrid('3');
            tabContent += formatClaimHeader('h3', character.Employer, `fullWidth`);
            if(character.Line2) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1, character.Line2]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1]);
            }
        }
        //same location, different employer
        else if (i !== characters.length - 1 && character.Location === characters[i - 1].Location && character.Employer !== characters[i - 1].Employer) {
            tabContent += formatClaimHeader('h3', character.Employer, `fullWidth`);
            if(character.Line2) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1, character.Line2]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1]);
            }
        }
        //same location, employer
        else if (i !== characters.length - 1 && character.Ability === characters[i - 1].Ability) {
            if(character.Line2) {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1, character.Line2]);
            } else {
                tabContent += formatClaimBox(character.GroupID,
                    character.AccountID,
                    character.Character,
                    [character.Line1]);
            }
        }
        //close after last character
        if(i === characters.length - 1) {
            tabContent += formatClaimGrid('3', true);
            tabs += formatTab(null, `jobs-${character.Location.replaceAll(' ', '-')}`, tabContent);
            labels += formatLabel('jobs', null, `jobs-${character.Location.replaceAll(' ', '-')}`, capitalize(character.Location));
        }
    });

    //clip to page
    document.querySelector(`tag-label[data-tab="jobs"]`).dataset.firstTab = firstTab;
    document.querySelector('#clip-jobs tag-labels').innerHTML = labels;
    document.querySelector('#clip-jobs tag-tabs').innerHTML = tabs;
}
function formatClasses(data) {
    let labels = formatLabel('students', 'class-lists', 'class-tab-name', 'Tab Name');
    let tabs = formatTab('class-lists', 'class-tab-name', 'Tab content');
    let firstTab = `class-tab-name`;

    document.querySelector(`tag-label[data-tab="class-lists"]`).dataset.triggerTab = firstTab;
    document.querySelector('#clip-classes-labels').innerHTML = labels;
    document.querySelector('#clip-classes-tabs').innerHTML = tabs;
}
function formatDorms(data) {
    let labels = formatLabel('students', 'dorms', 'dorm-tab-name', 'Tab Name');
    let tabs = formatTab('dorms', 'dorm-tab-name', 'Tab content');
    let firstTab = `dorm-tab-name`;

    document.querySelector(`tag-label[data-tab="dorms"]`).dataset.triggerTab = firstTab;
    document.querySelector('#clip-dorms-labels').innerHTML = labels;
    document.querySelector('#clip-dorms-tabs').innerHTML = tabs;
}
function formatQuidditch(data) {
    document.querySelector('#clip-hogwarts-quidditch').innerHTML = `Hogwarts quidditch`;
}
function formatLeadership(data) {
    document.querySelector('#clip-leadership').innerHTML = `Hogwarts leadership`;
}
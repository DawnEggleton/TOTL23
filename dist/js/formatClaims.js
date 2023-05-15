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

function formatFaces(data) {
    document.querySelector('#clip-faces').innerHTML = `Faces`;
}
function formatUniversities(data) {
    document.querySelector('#clip-university').innerHTML = `University Claims`;
}
function formatAbilitiesSpecies(data) {
    let labels = formatLabel('claims', 'abilities-species-claim', 'absp-tab-name', 'Tab Name');
    let tabs = formatTab('abilities-species-claim', 'absp-tab-name', 'Tab content');
    let firstTab = `tab-name`;

    document.querySelector(`tag-label[data-tab="abilities-species-claim"]`).dataset.triggerTab = firstTab;
    document.querySelector('#clip-absp-labels').innerHTML = labels;
    document.querySelector('#clip-absp-tabs').innerHTML = tabs;
}
function formatUpcoming(data) {
    document.querySelector('#clip-wip').innerHTML = `WIP Faces`;
}
function formatJobs(data) {
    let labels = formatLabel('jobs', false, 'job-section', 'Job Section');
    let tabs = formatTab(false, 'job-section', 'Job section content');

    let html = `<div class="webpage--tab-inner no-scroll">
        <div class="webpage--inner-tabs auto-height">
            <div class="webpage--labels">
                <button class="scroll--left" onClick="moveLeft(this)"><i class="fa-light fa-long-arrow-left"></i></button>
                <tag-labels>`;
    html += labels;
    html += `</tag-labels>
            <button class="scroll--right" onClick="moveRight(this)"><i class="fa-light fa-long-arrow-right"></i></button>
        </div>
        <tag-tabs class="webpage--tabs">`;
    html += tabs;
    html += `</tag-tabs>
        </div>
    </div>`;
            

    let firstTab = `job-section`;

    document.querySelector(`tag-label[data-tab="jobs"]`).dataset.firstTab = firstTab;
    document.querySelector('#clip-jobs').innerHTML = html;
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
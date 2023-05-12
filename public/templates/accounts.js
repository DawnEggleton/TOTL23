/******
var ml_age;
if('<!-- |age| -->' != '<i>No Information</i>' && ('<!-- |field_73| -->' == '<i>No Information</i>' || '<!-- |field_73| -->' == '0')) {
	ml_age = '<!-- |age| -->' - 16;
} else if ('<!-- |age| -->' == '<i>No Information</i>') {
	ml_age = '<!-- |field_13| -->';
} else {
	ml_age = '<!-- |age| -->' - 16 - '<!-- |field_73| -->';
}
if(ml_age < 20) {
	ageClass = `Teen`;
} else if(ml_age >= 20 && ml_age < 30) {
	ageClass = `20s`;
} else if(ml_age >= 30 && ml_age < 40) {
	ageClass = `30s`;
} else if(ml_age >= 40 && ml_age < 50) {
	ageClass = `40s`;
} else {
	ageClass = `50`;
}
******/
var el = document.createElement('div');
el.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
el.querySelectorAll('h1').forEach(header => header.remove());
el.querySelectorAll('h2').forEach(header => header.remove());
el.querySelectorAll('h3').forEach(header => header.remove());
el.querySelectorAll('h4').forEach(header => header.remove());
el.querySelectorAll('h5').forEach(header => header.remove());
el.querySelectorAll('h6').forEach(header => header.remove());
el.querySelectorAll('h7').forEach(header => header.remove());
el.querySelectorAll('h8').forEach(header => header.remove());

accounts.push({
        name: capitalize(`lux`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`4`),
        groupName: `admin`,
        image: `https://picsum.photos/600`,
        type: `Member`,
        bloodStatus: ``,
        age: parseInt(31),
        ageClass: '30s',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `SHe/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

accounts.push({
        name: capitalize(`jean-sebastian o'donnelly-taggart`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`8`),
        groupName: `hogwarts staff`,
        image: `https://64.media.tumblr.com/c84f51ddbbab07c792a00af21815dd78/tumblr_pyljuakclp1vz2ghao8_400.jpg`,
        type: `Character`,
        bloodStatus: `halfblood`,
        age: parseInt(36),
        ageClass: '30s',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `She/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

accounts.push({
        name: capitalize(`nikolas kovac`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`6`),
        groupName: `adults`,
        image: `https://64.media.tumblr.com/73531d21f6b6476be839117c868f46bb/bf5f0c25635aad1b-f9/s1280x1920/647cd826f997d5c84bd2a4834e10f01b3686cffb.jpg`,
        type: `Character`,
        bloodStatus: `halfblood`,
        age: parseInt(19),
        ageClass: 'Teen',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `SHe/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

accounts.push({
        name: capitalize(`aiden mitchell`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`12`),
        groupName: `ministry`,
        image: `https://64.media.tumblr.com/0720c51d8604fb4e91ea67797e99aced/31edb05a278d2403-5b/s640x960/bb482fcd68b3a3b0aeb511fa2787b5973659c6f8.jpg`,
        type: `Character`,
        bloodStatus: `halfblood`,
        age: parseInt(36),
        ageClass: '30s',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `SHe/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

accounts.push({
        name: capitalize(`abigail amesbury`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`6`),
        groupName: `adults`,
        image: `https://64.media.tumblr.com/2f3a4283bc33309a8926c16d38019288/fe432be0349896cd-c2/s500x750/0bf7ed6ebd6ce604f26f30cf6d6730e4e5fc939f.jpg`,
        type: `Character`,
        bloodStatus: `muggleborn`,
        age: parseInt(31),
        ageClass: '30s',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `SHe/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});

accounts.push({
        name: capitalize(`ellis hill`, [`-`, `'`, ` `]).replace(` `, `<br><span>`) + `</span>`,
        id: parseInt(`2`),
        groupID: parseInt(`18`),
        groupName: `entertainment`,
        image: `https://64.media.tumblr.com/bc549bbc25041eaa4f77c8440b745bb9/3850d8aefa973655-eb/s540x810/411504000a268516aee78707590bb32db54ac315.gifv`,
        type: `Character`,
        bloodStatus: `pureblood`,
        age: parseInt(22),
        ageClass: '20s',
        overview: el.innerText.substring(0, 255) + `... <a href="profile.html#shipper">Read More</a>`,
        alias: `Lux`.toLowerCase().replace(' ', "").replace('\/', ""),
        rawAlias: `Lux`,
        pronouns: `SHe/Her`,
        timezone: `GMT-4:00`,
        contact: `Discord`,
        triggers: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
});
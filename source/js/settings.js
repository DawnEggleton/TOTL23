let bMonth, bYear;
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();


const charAll = ['#field_32', '#field_75', '#field_33', '#field_11', '#field_12', '#field_34', '#field_72', '#field_73', '#field_36', '#field_69', '#field_37', '#field_38', '#field_15', '#field_39', '#field_25', '#field_40', '#field_41', '#field_49', '#field_50', '#field_14', '#field_22', '#field_16', '#field_62', '#field-birthday'];

const charTrad = ['#field_42', '#field_43', '#field_44', '#field_45', '#field_48', '#field_46', '#field_47', '#field_51', '#field_52', '#field_53', '#field_55', '#field_54', '#field_56', '#field_57', '#field_58', '#field_59'];

const hasFreeform = ['#field_60', '#field_61'];

const charBasic = ['#field_76', '#field_77'];


const allHeaders = [
    {'title': 'Identifiers (Required)', 'insertBefore': '#field_32'},
    {'title': 'Images (Required)', 'insertBefore': '#field_5'},
    {'title': 'Links (Directory Required)', 'insertBefore': '#field_18'},
    {'title': 'Player (Required)', 'insertBefore': '#field_8'},
    {'title': 'Other (Optional)', 'insertBefore': '#field_13'},
];

const charHeaders = [
    {'title': 'Basics (Required)', 'insertBefore': '#field_33'},
    {'title': 'Shipper (Required)', 'insertBefore': '#field_62'},
];

const tradHeaders = [
    {'title': 'Health (Required)', 'insertBefore': '#field_43'},
    {'title': 'Magic (Required)', 'insertBefore': '#field_49'},
    {'title': 'Personality (Required)', 'insertBefore': '#field_51'},
    {'title': 'Relationships (Required)', 'insertBefore': '#field_57'},
    {'title': 'Freeform (Required)', 'insertBefore': '#field_60'},
];

const simHeaders = [
    {'title': 'Relationships (Required)', 'insertBefore': '#field_76'},
    {'title': 'Cheatsheet (Required)', 'insertBefore': '#field_77'},
    {'title': 'Freeform (Required)', 'insertBefore': '#field_60'},
];

const basicHeaders = [
    {'title': 'Relationships (Required)', 'insertBefore': '#field_76'},
    {'title': 'Cheatsheet (Required)', 'insertBefore': '#field_77'},
];
const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    userName: String,
    userSecondName: String,
    userClass: String,
    agreeOrDisagree: String,
    policyChecked: Boolean,
});

module.exports = mongoose.model('UserData', UserData);

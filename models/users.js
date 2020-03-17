const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
	    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

var Users = mongoose.model('User',User);
module.exports = Users;
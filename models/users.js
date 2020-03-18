const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
	firstname: {
		type: String,
		default: ''
	},
	lastname: {
		type: String,
		default: ''
	},
	admin: {
       	type: Boolean,
       	default: false
    }
});

User.plugin(passportLocalMongoose);

var Users = mongoose.model('User',User);
module.exports = Users;
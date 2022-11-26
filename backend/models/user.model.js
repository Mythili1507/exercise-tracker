const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var schemaDef = {
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        minlength: 3
    }
};

var schemaOptions = {
    timestamps: true
};

const userSchema = new Schema(schemaDef, schemaOptions);

const User = mongoose.model('User', userSchema);

module.exports = User;
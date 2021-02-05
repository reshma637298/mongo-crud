const{mongoose, connection } = require('./index');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {type: String, required: true, default: null},
        profileImage: {type: String, required: true, default:null},
        status: {type: Boolean, required: true, default:null}
    },
    {
        versionKey : false,
    }
    
);

const User = connection.model('User', userSchema);
User.createCollection();

module.exports = {User};
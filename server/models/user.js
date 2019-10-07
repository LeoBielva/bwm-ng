const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String, 
        required: 'User name is required',
        min: [8, 'Not enought characters, Min is 8'], 
        max: [40, 'Too many characters, Max is 40'],
        // requiredPaths
    },
    email: {
        type: String,
        min: [8, 'Not enought characters, Min is 8'], 
        max: [128, 'Too many characters, Max is 128'],
        unique: true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]

    },
    password: {
        type: String,
        required: 'Password is required',
        min: [8, 'Not enought characters, Min is 8'], 
        max: [20, 'Too many characters, Max is 20'],
        match: [/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/]
    },
    rentals: [
        { 
        type: Schema.Types.ObjectId,
        ref: 'Rental'
        }
    ]
    
});

userSchema.methods.hasSamePassword = function(requestedPassword){

    return bcrypt.compareSync(requestedPassword, this.password);
};

userSchema.pre('save', function(next){
    const user = this;
    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    { 
        name: { 
            type: String,
            require: true,
        },
        email: { 
            type: String,
            require: true,
        },
        password: { 
            type: String,
            require: true,
        },
        pfp: { 
            type: String,
            require: false,
            default: 'https://www.pasrc.org/sites/g/files/toruqf431/files/styles/3x4_750w_1000h/public/2021-03/blank-profile-picture-973460_1280.jpg?itok=wWzzzj7Q',
        },
    }, 
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userModel);

module.exports = User;
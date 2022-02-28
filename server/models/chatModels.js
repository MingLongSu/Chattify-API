const mongoose = require('mongoose');

const chatModel = mongoose.Schema( 
    { 
        isGroupChat: { type: Boolean, default: false },
        chatName: { type: String, trim: true },
        users: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        chatId: { type: String, trim: true },
        groupAdmin: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        mostRecentMessage: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    }, 
    {
        timestamps: true,
    },
)

const Chat = mongoose.model('Chat', chatModel);

module.exports = Chat;
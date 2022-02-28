const { chats } = require('./dummyData/dummyData'); // just for testing

const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000; // temp

app.listen(5000, () => { 
    console.log(`Server is listening on ${ PORT }`);
});

app.get('/chat/:id', (req, res) => { 
    const desiredChatId = req.params.id;

    const desiredChat = chats.find(chat => chat.chatId === desiredChatId);
    res.send(desiredChat);
});
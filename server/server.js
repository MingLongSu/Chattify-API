const express = require('express');
const app = express();

const PORT = 5000; // temp

app.listen(5000, () => { 
    console.log(`Server is listening on ${ PORT }`);
});
const mongoose = require('mongoose');

const connectDB = async () => { 
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });

        console.log(`MongoDB cluster connection successful!\nConnection: ${ connection.connection.host }`);
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectDB;
const exp = require('constants');
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {   
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    } catch (error) {
        throw new Error('Unable to connect to database');
    }
}

export default dbConnect;
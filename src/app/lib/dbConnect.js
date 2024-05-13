const exp = require('constants');
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {   
        console.log('Connecting to database...');
        console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database');
    } catch (error) {
        throw new Error('Unable to connect to database');
    }
}

export default dbConnect;
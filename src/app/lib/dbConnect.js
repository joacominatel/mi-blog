const exp = require('constants');
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {   
        await mongoose.connect('mongodb+srv://jminatel:lolos2010@miblog.huklucd.mongodb.net/miblog');
        console.log('Connected to database');
    } catch (error) {
        throw new Error('Unable to connect to database');
    }
}

export default dbConnect;
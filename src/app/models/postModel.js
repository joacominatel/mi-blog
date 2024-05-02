const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title can not be more than 40 characters']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide an image url']
    },
    body: {
        type: String,
        required: [true, 'Please provide a body']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
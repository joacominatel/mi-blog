const mongoose = require('mongoose');

// crea el esquema para presentar mis proyectos en la base de datos
const projectSchema = new mongoose.Schema({
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
    shortDescription: {
        type: String,
        required: [false, 'Please provide a body']
    },
    longBody: {
        type: String,
        required: [true, 'Please provide a body']
    },
    linkGithub: {
        type: String,
        required: [false, 'Please provide a link']
    },
    anotherLink: {
        type: String,
        required: [false, 'Please provide a link']
    },
    category: {
        type: Array,
        required: [false, 'Please provide a category']
    },
    languagesUsed: {
        type: Array,
        required: [false, 'Please provide a language']
    },
    currentlyWorking: {
        type: Boolean,
        required: [true, 'Please provide a boolean']
    },
    collaborators: {
        type: Array,
        required: [false, 'Please provide a collaborator']
    },
    initialDate: {
        type: Date,
        default: Date.now
    },
    finalDate: {
        type: Date,
        default: Date.now
    }
});

// exporta el modelo de proyecto
export default mongoose.models.Project || mongoose.model('Project', projectSchema);
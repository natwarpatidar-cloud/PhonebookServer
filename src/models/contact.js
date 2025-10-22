import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    label: {
        type: String,
        enum: ['Work', 'School' , 'Friends', 'Family'],
    } 
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
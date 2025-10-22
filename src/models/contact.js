import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
    name: {
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
        // required: true
    },
    address: {
        type: String,
        required: true
    },
    label: {
        type: String,
        enum: ['Work', 'School' , 'Friends', 'Family'],
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }

}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
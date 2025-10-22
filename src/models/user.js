import bcrypt from 'bcrypt';
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contact"
        }
    ]
});

userSchema.pre('save', function hashPassword(next) {
    const user =  this;
    if (this.isModified("password")) {
        const SALT = bcrypt.genSaltSync(9);
        const hashedPassword = bcrypt.hashSync(user.password, SALT);
        user.password = hashedPassword;
    }
    next();
});

const User = mongoose.model('User', userSchema);

export default User;
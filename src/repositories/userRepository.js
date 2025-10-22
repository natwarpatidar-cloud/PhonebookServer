import User from '../models/user.js';

export const signup = async (data) => {
    try {
        const newUser = User(data);
        await newUser.save();
        return newUser;
    } catch (error) {
        console.log("Error at signupRepository:", error);
        throw error;
    }
}

export const getByPhone = async(phone) => {
    try {
        const user = await User.findOne({ phone });
        return user;
    } catch (error) {
        console.log("Error at getByPhoneRepository:", error);
        throw error;
    }
}

export const getUserWithDetails = async(id) => {
    try {
        const user = await User.findById(id).populate({ path: 'contacts' });
        return user;
    } catch (error) {
        console.log("Error at getUserWithDetails:", error);
        throw error;
    }
}
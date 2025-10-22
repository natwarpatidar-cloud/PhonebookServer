import bcrypt from 'bcrypt';
import { getByPhone, signup } from "../repositories/userRepository.js";
import { createJWT } from '../utils/authUtils.js';

export const signupService = async(userData) => {
    try {
        if(!userData.phone) {
            throw new Error("Phone no is required");
        }
        if(!userData.password) {
            throw new Error("Password is required");
        }

        const user = await getByPhone(userData.phone);

        if(user) {
            throw new Error("A user with the same number already exist");
        } 

        const newUser = await signup(userData);
        if(newUser) {
            return "User signed up successfully";
        } else {
            throw new Error("Error in signing up the user");
        }
    } catch (error) {
        console.log("Error in signupService: ", error);
        throw error;
    }
}


export const loginService = async(userData) => {
    try {
        if(!userData.phone) {
            throw new Error("Phone number is required");
        }
        if(!userData.password) {
            throw new Error("Password is required");
        }

        const user = await getByPhone(userData.phone);

        if(!user) {
            throw new Error("User does not exist");
        }

        const isMatch = bcrypt.compareSync(userData.password, user.password);
        if(!isMatch) {
            throw new Error("Passwords do not match");
        }

        return{
            phone: user.phone,
            _id: user._id,
            token: createJWT({ id: user._id, phone: user.phone })
        }
    } catch (error) {
        console.log("Error in signupService: ", error);
        throw error;
    }
}
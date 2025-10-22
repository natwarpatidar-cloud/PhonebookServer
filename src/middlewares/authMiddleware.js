import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig.js';
import { getUserById } from '../repositories/userRepository.js';

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];

        if(!token) {
            return res.status(403).json({
                error: "No auth token provided",
                success: false
            });
        }

        const response = jwt.verify(token, JWT_SECRET);

        if(!response) {
            return res.status(403).json({
                error: "Invalid token provided",
                success: false
            });
        }

        const user = await getUserById(response.id);

        if(!user) {
            return res.status(403).json({
                error: "Provided token is been expired",
                success: false
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error at auth middleware: ", error);
        if(error.message) {
            return res.status(501).json({
                success: false,
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            error: "Internal server error"
        });
    }
}
import { loginService, signupService } from "../services/userService.js";

export const signupController = async(req, res) => {
    try {
        const response = await signupService(req.body);
        return res.status(201).json({
            message: "Signed up successfully",
            data: response,
            success: true
        });
    } catch (error) {
        console.log("Error at signupController: ", error);
        if(error.message) {
            return res.status(501).json({
                success: false,
                data: {},
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            data: {},
            error: "Internal server error"
        });
    }
}

export const loginController = async(req, res) => {
    try {
        const response = await loginService(req.body);
        return res.status(200).json({
            message: "Signed up logged in",
            data: response,
            success: true
        });
    } catch (error) {
        console.log("Error at loginController: ", error);
        if(error.message) {
            return res.status(501).json({
                success: false,
                data: {},
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            data: {},
            error: "Internal server error"
        });
    }
}
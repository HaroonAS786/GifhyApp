import { END_POINTS } from "../../utilities/endPoints"
import { apiRequest } from "../interceptor/Interceptor"

export const userLogin = (body) => {
    return apiRequest.post(END_POINTS.LOGIN, body)
}
export const userSignUp = (body) => {
    return apiRequest.post(END_POINTS.SIGN_UP, body)
}
export const otpVerification = (body) => {
    return apiRequest.post(END_POINTS.OTP_VERIFICATION, body)
}
export const resetPassword = (body) => {
    return apiRequest.post(END_POINTS.RESET_PASSWORD, body)
}
export const forgotPassword = (body) => {
    return apiRequest.post(END_POINTS.FORGOT_PASSWORD, body)
}
export const resendOtp = (body) => {
    return apiRequest.post(END_POINTS.RESEND_OTP, body)
}

const api = {
    userLogin,
    userSignUp,
    forgotPassword,
    otpVerification,
    resetPassword,
    resendOtp,
}

export default api;



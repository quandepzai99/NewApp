// Declare các action type
// Khi dispatch nhận vào 1 type thì sẽ tìm type đó trong reducer
export const AuthActions = {
  isPhoneNumberExist: 'iS_PHONE_NUMBER_EXIST',
  isPasswordCorrect: 'IS_PASSWORD_CORRECT',
  validateToken: "VALIDATE_TOKEN",
  logout: "LOG_OUT",
  confirmPassword: "CHECK_CURRENT_PASSWORD",
  changePassword: 'CHANGE_PASSWORD',
  phoneRegister: 'PHONE_REGISTER',
  sendOTP: 'SEND_OTP',
  confirmOTP: 'CONFIRM_OTP',
  activeAccount: 'ACTIVE_ACCOUNT',
};


export class MSG {
  static readonly MESSAGE_ERROR_BODY_FIELD: string = "";

  // --- ERROR MESSAGES
  static readonly MESSAGE_ERROR_USER_NOT_FOUND: string = "user not found";
  static readonly MESSAGE_ERROR_USER_LOGIN: string =
    "invalid email or password";
  static readonly MESSAGE_ERROR_USER_REGISTER: string =
    "email already registered";

  // --- SUCCESS MESSAGES
  static readonly MESSAGE_SUCCESS_USER_REGISTER: string =
    "user created successfully";
  static readonly MESSAGE_SUCCESS_USER_LOGIN: string = "login success";
  static readonly MESSAGE_SUCCESS_REVIEW_CREATE: string = "review created";
  static readonly MESSAGE_SUCCESS_RESERVATION_CREATE: string =
    "reservation created";
}

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

enum StatusCodeEnums {
  /** User */
  USER_NOT_FOUND = 10100,
  USER_ALREADY_EXISTS,
  FAILED_TO_ADD_USER,

  /** Hobby */
  HOBBY_NOT_FOUNT,
  HOBBY_ALREADY_EXISTS,
}

const StatusCodeExceptionText: EnumDictionary<StatusCodeEnums, string> = {
  [StatusCodeEnums.USER_NOT_FOUND]: 'USER_NOT_FOUND',
  [StatusCodeEnums.USER_ALREADY_EXISTS]: 'USER_ALREADY_EXISTS',
  [StatusCodeEnums.FAILED_TO_ADD_USER]: 'FAILED_TO_ADD_USER',

  [StatusCodeEnums.HOBBY_NOT_FOUNT]: 'PROFILE_NOT_FOUNT',
  [StatusCodeEnums.HOBBY_ALREADY_EXISTS]: 'HOBBY_ALREADY_EXISTS',

};

export { StatusCodeEnums, StatusCodeExceptionText };

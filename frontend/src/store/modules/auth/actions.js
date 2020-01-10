export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(
  firstName,
  lastName,
  email,
  phone,
  cpf,
  password
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { firstName, lastName, email, phone, cpf, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

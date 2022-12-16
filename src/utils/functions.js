import { emailPattern, passwordPattern } from "./variables";

export function validateEmail(email) {
  if (email && !email.match(emailPattern)) {
    return false;
  }
  return true;
}

export function validatePassword(password) {
  if (password && !password.match(passwordPattern)) {
    return false;
  }
  return true;
}

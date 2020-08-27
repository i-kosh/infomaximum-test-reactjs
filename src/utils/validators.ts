import isEmail from "validator/es/lib/isEmail";

export function emailValidate(email: string | undefined): string | null {
  let error: string | null = null;

  if (!email) {
    error = "Введите email";
  } else if (!isEmail(email)) {
    error = "Введите корректный email";
  }

  return error;
}

export function passwordValidate(password: string | undefined): string | null {
  let error: string | null = null;

  if (!password) {
    error = "Введите пароль";
  } else if (password.length < 8) {
    error = "минимум 8 символов";
  }

  return error;
}

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

export function passwordValidate(
  password: string | undefined,
  required = true
): string | null {
  let error: string | null = null;

  if (!password && required) {
    error = "Введите пароль";
  } else if (password && password.length < 8) {
    error = "минимум 8 символов";
  }

  return error;
}

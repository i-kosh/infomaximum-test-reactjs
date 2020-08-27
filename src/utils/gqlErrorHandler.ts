import { ClientError } from "graphql-request";
import isDev from "./isDev";

export default function gqlErrorHandler(err: any): string[] | undefined {
  const errors: string[] = [];

  if (err instanceof ClientError) {
    const errorsArray = err.response.errors;

    if (errorsArray) {
      errorsArray.forEach((val) => {
        errors.push(val.message);
      });
    } else {
      errors.push("Неизвестная ошибка");
    }
  } else if (err instanceof Error) {
    errors.push(err.message);

    if (isDev()) {
      console.dir(err);
    }
  } else {
    errors.push("Неизвестная ошибка");

    if (isDev()) {
      console.dir(err);
    }
  }

  return errors.length > 0 ? errors : undefined;
}

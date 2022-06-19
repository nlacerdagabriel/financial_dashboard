import { toast } from "react-toastify";

export function handleRegisterErrors(arrayErrors, arrayMessages) {
  if (arrayErrors.length > 0) {
    for (let item of arrayErrors) {
      item.field == "name" &&
        item.message == "minLength validation failed" &&
        toast.error(`Field Name must have at least 4 letters`);

      item.field == "email" &&
        item.message == "unique validation failure" &&
        toast.error(`E-mail already exists`);

      item.message == "required validation failed" &&
        toast.error(`The field ${item.field} is required`);

      item.message == "email validation failed" &&
        toast.error(`Your E-mail is not valid`);

      item.field == "password" &&
        item.message == "minLength validation failed" &&
        toast.error(`Field Password must have at least 4 letters`);

      item.field == "confirmPassword" &&
        item.message == "minLength validation failed" &&
        toast.error(`Field ConfirmPassword must have at least 4 letters`);
    }
  }

  if (arrayMessages.length > 0) {
    arrayMessages.map(() => {
      toast.error(`Field Password and ConfirmPassword must be equals`);
    });
  }
}

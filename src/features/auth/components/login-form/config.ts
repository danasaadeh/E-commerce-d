import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

const isDev = import.meta.env.MODE === "development";
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginFormSchemaValidation = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email or phone number is required")
    .test(
      "is-email-or-phone",
      "Must be a valid email or phone number",
      (value) => {
        if (!value) return false;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),

  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must be strong (8+ chars, uppercase, lowercase, number, special char).",
      (value) => {
        if (!value) return false;
        return isDev ? true : strongPasswordRegex.test(value);
      }
    )
    .max(20, "Password cannot exceed 20 characters"),
});

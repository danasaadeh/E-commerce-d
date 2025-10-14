// config.ts
import * as yup from "yup";

const isDev = import.meta.env.MODE === "development";

const nameRegex = /^[A-Za-z\s]{3,20}$/;
const emailOrPhoneRegex =
  /^((\+?\d{1,3}[- ]?)?\d{10}$)|(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpFormSchemaValidation = yup.object({
  name: yup
    .string()
    .trim()
    .required("Full name is required")
    .matches(
      nameRegex,
      "Name must contain only letters and be between 3–20 characters"
    ),

  email: yup
    .string()
    .trim()
    .required("Email or phone number is required")
    .matches(emailOrPhoneRegex, "Enter a valid email or phone number"),

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

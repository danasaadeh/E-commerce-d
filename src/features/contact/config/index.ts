import * as yup from "yup";

// ✅ Contact form schema
export const contactFormSchemaValidation = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-() ]+$/, "Invalid phone number")
    .min(7, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
  message: yup
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

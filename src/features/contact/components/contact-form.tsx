import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchemaValidation, ContactFormData } from "../config";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchemaValidation),
    mode: "onTouched",
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);

    // Mock success feedback
    setSnackbar({
      open: true,
      message: "Message sent successfully! 🎉",
      severity: "success",
    });

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md"
        noValidate
      >
        {/* Top Row: Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <TextField
            placeholder="Your Name *"
            fullWidth
            variant="filled"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: "#F5F5F5", borderRadius: "4px" },
            }}
          />

          <TextField
            placeholder="Your Email *"
            type="email"
            fullWidth
            variant="filled"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: "#F5F5F5", borderRadius: "4px" },
            }}
          />

          <TextField
            placeholder="Your Phone *"
            type="tel"
            fullWidth
            variant="filled"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: "#F5F5F5", borderRadius: "4px" },
            }}
          />
        </div>

        {/* Message Field */}
        <TextField
          placeholder="Your Message *"
          fullWidth
          multiline
          rows={8}
          variant="filled"
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
          InputProps={{
            disableUnderline: true,
            style: { backgroundColor: "#F5F5F5", borderRadius: "4px" },
          }}
          sx={{ mb: 3 }}
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#DB4444",
              color: "white",
              padding: "12px 48px",
              borderRadius: "4px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              "&:hover": { backgroundColor: "#C23333" },
            }}
          >
            Send Message
          </Button>
        </div>
      </form>

      {/* ✅ Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;

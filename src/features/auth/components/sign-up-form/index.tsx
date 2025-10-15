import React, { useState } from "react";
import loginImage from "@/assets/images/auth/login.jpg";
import Google from "/src/assets/icons/Google.svg";
import {
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { appRoutes } from "../../../../routes";
import { useSignUpMutation } from "../../services/mutations";
import { signUpFormSchemaValidation } from "./config";
import AppSnackbar from "@/shared/components/snack-bar/app-snackbar";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchemaValidation),
    mode: "onTouched",
  });

  const { mutateAsync: signUp, isPending } = useSignUpMutation();

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

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
      });

      setSnackbar({
        open: true,
        message: "Account created successfully!",
        severity: "success",
      });

      setTimeout(() => {
        navigate(appRoutes.home);
      }, 1500);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Sign-up failed. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 -mx-6 md:-mx-0">
        {/* 🖼️ Left Side Image (hidden on mobile) */}
        {!isMobile && (
          <div className="flex justify-center items-center bg-[#CBE4E8] min-h-[600px] md:min-h-screen">
            <img
              src={loginImage}
              alt="Shopping illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 🧾 Right Side Form */}
        <div
          className={`flex items-center justify-center px-6 py-12 ${
            isMobile ? "min-h-[80vh]" : "min-h-screen"
          }`}
        >
          <div className="w-full max-w-md">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center md:text-left">
              Create an account
            </h2>
            <p className="text-base mb-12 text-center md:text-left">
              Enter your details below
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* Name */}
              <TextField
                fullWidth
                placeholder="Name"
                variant="standard"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiInput-root": { fontSize: "16px" },
                  "& .MuiInput-input": { padding: "8px 0" },
                }}
              />

              {/* Email */}
              <TextField
                fullWidth
                placeholder="Email or Phone Number"
                variant="standard"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiInput-root": { fontSize: "16px" },
                  "& .MuiInput-input": { padding: "8px 0" },
                }}
              />

              {/* Password */}
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                variant="standard"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  "& .MuiInput-root": { fontSize: "16px" },
                  "& .MuiInput-input": { padding: "8px 0" },
                }}
              />

              {/* Submit Button */}
              <Button
                fullWidth
                type="submit"
                disabled={isPending}
                variant="contained"
                sx={{
                  backgroundColor: "#DB4444",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "16px",
                  py: 2,
                  borderRadius: "4px",
                  mt: 5,
                  "&:hover": { backgroundColor: "#b83636" },
                }}
              >
                {isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Create Account"
                )}
              </Button>

              {/* Google Signup */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img src={Google} alt="Google" className="w-6 h-6" />
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "16px",
                  py: 2,
                  borderRadius: "4px",
                  borderColor: "rgba(0, 0, 0, 0.23)",
                  color: "#000",
                  mt: 2,
                  "&:hover": {
                    borderColor: "rgba(0, 0, 0, 0.4)",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                Sign up with Google
              </Button>
            </form>

            {/* Already have an account */}
            <p className="text-base text-center mt-8 flex items-center justify-center gap-4">
              <span className="opacity-70">Already have an account?</span>
              <Link
                to={appRoutes.auth.login}
                className="font-medium underline decoration-1 underline-offset-4 hover:opacity-70 text-[#DB4444]"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
};

export default SignupForm;

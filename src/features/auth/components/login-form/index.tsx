import React, { useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material/styles";

import { useLoginMutation } from "../../services/mutations";
import { loginFormSchemaValidation } from "./config";
import { appRoutes } from "@/routes";
import loginImage from "@/assets/images/auth/login.jpg";
import AppSnackbar from "@/shared/components/snack-bar/app-snackbar";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ Capture where user came from (default to home)
  const from = location.state?.from || appRoutes.home;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchemaValidation),
    mode: "onTouched",
  });

  const { mutateAsync: login, isPending } = useLoginMutation();

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

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login({
        email: data.email,
        password: data.password,
      });

      setSnackbar({
        open: true,
        message: "Login successful! Redirecting...",
        severity: "success",
      });

      // ✅ Redirect user to their origin page or home
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } catch (error: any) {
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Login failed. Please check your credentials.",
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
              alt="Login illustration"
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
              Log in to Exclusive
            </h2>
            <p className="text-base mb-12 text-center md:text-left">
              Enter your details below
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
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
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
                }}
              />

              {/* Button + Forgot Password */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                  sx={{
                    backgroundColor: "#DB4444",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 500,
                    px: 6,
                    py: 2,
                    borderRadius: "4px",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: "#b83636" },
                  }}
                >
                  {isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Log In"
                  )}
                </Button>

                <Link
                  to="/forgot-password"
                  className="text-base text-[#DB4444] hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
};

export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingSchema } from "../config/index"; // ✅ adjust path if needed
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { InferType } from "yup";

type BillingFormData = InferType<typeof billingSchema>;

const BillingForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<BillingFormData>();

  return (
    <Box className="w-full max-w-lg">
      {/* Title */}
      <Typography variant="h5" className="!font-semibold !mb-8 !text-gray-900">
        Billing Details
      </Typography>

      {/* Form Fields */}
      <Box className="flex flex-col gap-6">
        {/* First Name */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            First Name*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("firstName")}
            error={!!errors.firstName}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
          {errors.firstName && (
            <Typography color="error" variant="caption">
              {errors.firstName.message}
            </Typography>
          )}
        </Box>

        {/* Company Name */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Company Name
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("companyName")}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
        </Box>

        {/* Street Address */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Street Address*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("streetAddress")}
            error={!!errors.streetAddress}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
          {errors.streetAddress && (
            <Typography color="error" variant="caption">
              {errors.streetAddress.message}
            </Typography>
          )}
        </Box>

        {/* Apartment */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Apartment, floor, etc. (optional)
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("apartment")}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
        </Box>

        {/* City */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Town/City*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("city")}
            error={!!errors.city}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
          {errors.city && (
            <Typography color="error" variant="caption">
              {errors.city.message}
            </Typography>
          )}
        </Box>

        {/* Phone */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Phone Number*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            {...register("phone")}
            error={!!errors.phone}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
          {errors.phone && (
            <Typography color="error" variant="caption">
              {errors.phone.message}
            </Typography>
          )}
        </Box>

        {/* Email */}
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Email Address*
          </Typography>
          <OutlinedInput
            fullWidth
            type="email"
            placeholder=""
            {...register("email")}
            error={!!errors.email}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": { borderColor: "#E0E0E0" },
              "&:hover fieldset": { borderColor: "#BDBDBD" },
              "&.Mui-focused fieldset": { borderColor: "#DB4444" },
              "& input": { padding: "12px 14px" },
            }}
          />
          {errors.email && (
            <Typography color="error" variant="caption">
              {errors.email.message}
            </Typography>
          )}
        </Box>

        {/* Save Info Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              {...register("saveInfo")}
              color="error"
              sx={{ "&.Mui-checked": { color: "#DB4444" } }}
            />
          }
          label={
            <Typography variant="body2" className="text-gray-700">
              Save this information for faster check-out next time
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default BillingForm;

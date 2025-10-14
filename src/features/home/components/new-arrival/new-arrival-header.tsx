import React from "react";
import { Box, Typography } from "@mui/material";

const NewArrivalHeader: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Featured label */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Box
          sx={{
            width: 20,
            height: 40,
            bgcolor: "#DB4444",
            borderRadius: 1,
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#DB4444" }}>
          Featured
        </Typography>
      </Box>

      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 20, md: 24 },
          color: "black",
        }}
      >
        New Arrival
      </Typography>
    </Box>
  );
};

export default NewArrivalHeader;

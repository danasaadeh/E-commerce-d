import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CountdownTimer from "./count-down-timer";

export default function FlashSalesHeader() {
  const targetDate = Date.now() + 1000 * 60 * 60 * 24 * 3; // 3 days from now

  return (
    <Box className="mb-10">
      {/* 🔴 Top Label Row */}
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <Box
          sx={{ width: 20, height: 40, bgcolor: "#DB4444", borderRadius: 1 }}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#DB4444" }}>
          Today's
        </Typography>
      </Box>

      {/* 🧭 Title, Timer, Arrows */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        {/* Left: Flash Sales + Timer */}
        <Box display="flex" alignItems="center" gap={4} flexWrap="wrap">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#000",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Flash Sales
          </Typography>

          {/* Countdown Timer beside title */}
          <CountdownTimer targetDate={targetDate} />
        </Box>

        {/* Navigation Arrows */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <button className="flash-prev h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowLeft fontSize="small" />
          </button>
          <button className="flash-next h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowRight fontSize="small" />
          </button>
        </Box>
      </Box>
    </Box>
  );
}

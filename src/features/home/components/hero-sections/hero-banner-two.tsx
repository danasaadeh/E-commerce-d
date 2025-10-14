import { Box, Button, Typography } from "@mui/material";

import SpeakerImg from "@/assets/images/home/hero-sections/mp3.png"; // or .svg — whatever you have
import CountdownTimer from "../flash-sales/count-down-timer";

const HeroBannerTwo: React.FC = () => {
  const targetDate = Date.now() + 1000 * 60 * 60 * 24 * 5; // example: 5 days from now

  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 100%)",
        border: "2px solid #00FF66",
        borderRadius: "10px",
        color: "#fff",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* 📝 Left Text Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#00FF66", fontWeight: 600, mb: 1 }}
        >
          Categories
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            lineHeight: 1.2,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
          }}
        >
          Enhance Your <br /> Music Experience
        </Typography>

        {/* Countdown Timer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
            mb: 4,
          }}
        >
          <CountdownTimer targetDate={targetDate} />
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00FF66",
            color: "#fff",
            borderRadius: "6px",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#00e65a",
            },
          }}
        >
          Buy Now!
        </Button>
      </Box>

      {/* 🔊 Speaker Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: { xs: 6, md: 0 },
        }}
      >
        <Box
          component="img"
          src={SpeakerImg}
          alt="Speaker"
          sx={{
            width: { xs: "80%", md: "450px" },
            objectFit: "contain",
            filter: "drop-shadow(0 0 20px rgba(0,255,102,0.3))",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroBannerTwo;

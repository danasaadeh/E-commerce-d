import type React from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import CenteredImageBox from "./centered-image-box";
import NewArrivalHeader from "./new-arrival-header";

// ✅ Import Images
import ps5Img from "@/assets/images/home/hero-sections/play_station.png";
import womanImg from "@/assets/images/home/hero-sections/woman_with_hat.jpg";
import speakersImg from "@/assets/images/home/hero-sections/microphone.png";
import perfumeImg from "@/assets/images/home/hero-sections/perfume.png";

const NewArrival: React.FC = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
        px: { xs: 2, md: 4 },
        py: 4,
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* Header */}
      <NewArrivalHeader />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          mt: 4,
          minHeight: { xs: "auto", md: 600 },
        }}
      >
        {/* LEFT SIDE — PS5 */}
        <Box>
          <CenteredImageBox
            src={ps5Img}
            alt="PlayStation 5"
            title="PlayStation 5"
            subtitle="Black and White version of the PS5 coming out on sale."
            height={{ xs: 300, md: 600 }}
            shopLink="/shop/ps5"
          />
        </Box>

        {/* RIGHT SIDE — 3 stacked blocks */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: { xs: "auto", md: 600 },
          }}
        >
          {/* Woman's Collection - Takes up top half */}
          <Box sx={{ flex: 1, minHeight: 0 }}>
            <CenteredImageBox
              src={womanImg}
              alt="Women's Collections"
              title="Women's Collections"
              subtitle="Featured woman collections that give you another vibe."
              height="100%"
              shopLink="/shop/women"
            />
          </Box>

          {/* Speakers + Perfume - Bottom row side by side */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              flex: 1,
              minHeight: 0,
            }}
          >
            <CenteredImageBox
              src={speakersImg}
              alt="Speakers"
              title="Speakers"
              subtitle="Amazon wireless speakers"
              height="100%"
              shopLink="/shop/speakers"
            />
            <CenteredImageBox
              src={perfumeImg}
              alt="Perfume"
              title="Perfume"
              subtitle="GUCCI INTENSE OUD EDP"
              height="100%"
              isGlow
              shopLink="/shop/perfume"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewArrival;

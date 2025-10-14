import type React from "react";
import { Box, Typography } from "@mui/material";

interface CenteredImageBoxProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  height: number | string | { xs: number | string; md: number | string };
  isGlow?: boolean;
  shopLink?: string;
}

const CenteredImageBox: React.FC<CenteredImageBoxProps> = ({
  src,
  alt,
  title,
  subtitle,
  height,
  isGlow,
  shopLink,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.85,
        }}
      />

      {/* Optional glow */}
      {isGlow && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 150, sm: 200, md: 300 },
            height: { xs: 150, sm: 200, md: 300 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
      )}

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 12, md: 20 },
          bottom: { xs: 16, md: 24 },
          color: "white",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 0.5, md: 1 },
          maxWidth: { xs: "90%", md: "80%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 16, md: 22 },
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 12, md: 16 },
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.2,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {shopLink && (
          <Box
            component="a"
            href={shopLink}
            sx={{
              fontSize: { xs: 12, md: 16 },
              textDecoration: "underline",
              color: "white",
              cursor: "pointer",
              mt: 0.5,
              "&:hover": { color: "red" },
            }}
          >
            Shop Now
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CenteredImageBox;

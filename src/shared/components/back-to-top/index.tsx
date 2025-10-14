import React, { useEffect, useState } from "react";
import { Fab, useMediaQuery, useTheme, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        aria-label="back to top"
        sx={{
          position: "fixed",
          bottom: isMobile ? 16 : 32,
          right: isMobile ? 16 : 32,
          backgroundColor: "#F5F5F5",
          color: "black",
          "&:hover": {
            backgroundColor: "#DB4444",
          },
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTopButton;

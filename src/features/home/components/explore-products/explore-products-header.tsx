import { Box, Typography } from "@mui/material";

interface ExploreHeaderProps {
  title?: string;
  subtitle?: string;
  color?: string;
}

const ExploreHeader: React.FC<ExploreHeaderProps> = ({
  title = "Our Products",
  subtitle = "Explore Our Products",
  color = "#db4444",
}) => {
  return (
    <>
      {/* Left red label + title */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Box sx={{ width: 20, height: 40, bgcolor: color, borderRadius: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color }}>
          {title}
        </Typography>
      </Box>

      {/* Subtitle (Browse By Category) */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          color: "#000",
          fontSize: { xs: "1.5rem", md: "2.7rem" },
          mb: 3,
        }}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default ExploreHeader;

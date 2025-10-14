import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface BestSellingHeaderProps {
  title?: string;
  subtitle?: string;
  color?: string;
}

const BestSellingHeader: React.FC<BestSellingHeaderProps> = ({
  title = "This Month",
  subtitle = "Best Selling Products",
  color = "#DB4444",
}) => {
  const navigate = useNavigate();
  return (
    <Box mb={4}>
      {/* 🔴 Red label + section title */}
      <Box display="flex" alignItems="center" gap={1} mb={1.5}>
        <Box sx={{ width: 20, height: 40, bgcolor: color, borderRadius: 1 }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* 🧭 Subtitle + View All Button (same line) */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            color: "#000",
            fontSize: { xs: "1.5rem", md: "2.7rem" },
          }}
        >
          {subtitle}
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate(`/products`)}
          sx={{
            px: 5,
            py: 1.2,
            fontSize: 14,
            textTransform: "none",
            borderRadius: 1,
            bgcolor: "#DB4444",
            "&:hover": { bgcolor: "#c13d3d" },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default BestSellingHeader;

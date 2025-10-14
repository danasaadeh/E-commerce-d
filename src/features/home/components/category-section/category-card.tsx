import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  icon: string;
  label: string;
  slug: string; // required
  selected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  label,
  slug,
  selected = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (slug) navigate(`/category?slug=${slug}`); // ✅ now uses search param
  };

  return (
    <Box
      onClick={handleClick}
      className={`flex flex-col items-center justify-center border rounded-md p-4 cursor-pointer transition-all duration-300
        ${
          selected
            ? "bg-[#db4444] text-white border-[#db4444]"
            : "bg-white hover:bg-[#db4444] hover:text-white border-gray-300"
        }`}
      sx={{
        width: { xs: 110, md: 150 },
        height: { xs: 110, md: 150 },
        textAlign: "center",
        overflow: "hidden",
        "&:hover img": {
          filter: "brightness(0) invert(1)",
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: 40,
          height: 40,
          mb: 1,
          transition: "all 0.3s ease",
        }}
      />

      <Typography
        variant="body2"
        className="font-medium"
        sx={{
          textAlign: "center",
          fontSize: { xs: "0.75rem", md: "0.875rem" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CategoryCard;

import { Box, Typography } from "@mui/material";

interface RelatedItemsHeaderProps {
  title?: string;
  subtitle?: string;
  color?: string;
}

const RelatedItemsHeader: React.FC<RelatedItemsHeaderProps> = ({
  title = "Related Items",

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
    </>
  );
};

export default RelatedItemsHeader;

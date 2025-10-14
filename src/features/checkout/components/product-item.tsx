import { Box, Typography } from "@mui/material";

interface ProductItemProps {
  image: string;
  name: string;
  price: number;
}

const ProductItem = ({ image, name, price }: ProductItemProps) => {
  return (
    <Box className="flex items-center justify-between py-4">
      <Box className="flex items-center gap-4">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-12 h-12 object-contain"
        />
        <Typography variant="body2" className="text-gray-800">
          {name}
        </Typography>
      </Box>
      <Typography variant="body2" className="font-medium">
        ${price}
      </Typography>
    </Box>
  );
};

export default ProductItem;

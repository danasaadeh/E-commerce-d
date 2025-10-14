import type React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  };
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemove?: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const handleIncrement = () => {
    if (onUpdateQuantity) onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (onUpdateQuantity && item.quantity > 1)
      onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    if (onRemove) onRemove(item.id);
  };

  return (
    <Box
      className="border-b border-gray-200 last:border-b-0"
      sx={{
        py: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1, sm: 2, md: 4 },
          flexWrap: "wrap",
        }}
      >
        {/* Product Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            minWidth: { xs: "100%", sm: "35%" },
            position: "relative",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <IconButton
            size="small"
            onClick={handleRemove}
            className="!bg-red-500 !text-white hover:!bg-red-600"
            sx={{
              position: "absolute",
              left: -8,
              top: -8,
              width: { xs: 18, md: 20 },
              height: { xs: 18, md: 20 },
            }}
          >
            <Close sx={{ fontSize: { xs: 10, md: 12 } }} />
          </IconButton>

          <Box
            sx={{
              width: { xs: 40, sm: 50, md: 60 },
              height: { xs: 40, sm: 50, md: 60 },
              flexShrink: 0,
            }}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </Box>

          <Typography
            variant="body2"
            className="font-normal text-gray-900"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}
          >
            {item.name}
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          variant="body2"
          className="text-gray-900 hidden sm:block text-center flex-1"
          sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          ${item.price}
        </Typography>

        {/* Quantity */}
        <Box
          className="flex items-center border border-gray-300 rounded"
          sx={{
            height: { xs: 32, md: 36 },
            justifyContent: "center",
            flex: 1,
            maxWidth: 120,
          }}
        >
          <IconButton
            size="small"
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
            className="!rounded-none hover:!bg-red-500 hover:!text-white"
            sx={{ px: { xs: 0.5, md: 1 }, borderRadius: 0 }}
          >
            <Remove sx={{ fontSize: { xs: 12, md: 14 } }} />
          </IconButton>

          <Typography
            variant="body2"
            className="text-center font-medium"
            sx={{
              minWidth: { xs: 28, md: 36 },
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            {item.quantity.toString().padStart(2, "0")}
          </Typography>

          <IconButton
            size="small"
            onClick={handleIncrement}
            className="!rounded-none hover:!bg-red-500 hover:!text-white"
            sx={{ px: { xs: 0.5, md: 1 }, borderRadius: 0 }}
          >
            <Add sx={{ fontSize: { xs: 12, md: 14 } }} />
          </IconButton>
        </Box>

        {/* Subtotal */}
        <Typography
          variant="body2"
          className="text-gray-900 font-medium text-center flex-1"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          ${item.price * item.quantity}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartItem;

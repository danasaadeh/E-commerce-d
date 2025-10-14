import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHelper } from "@/features/auth/utilities/auth";
import { appRoutes } from "@/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LogoutDialog from "../log-out-dialog/index";
import "./style.css";

interface ProfileDropdownProps {
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const menuItems = [
    {
      icon: <AccountCircleOutlinedIcon fontSize="small" />,
      label: "Manage My Account",
      onClick: () => navigate(appRoutes.home || "/profile"),
    },
    {
      icon: <ShoppingBagOutlinedIcon fontSize="small" />,
      label: "My Order",
      onClick: () => navigate(appRoutes.home || "/orders"),
    },
    {
      icon: <CancelOutlinedIcon fontSize="small" />,
      label: "My Cancellations",
      onClick: () => navigate(appRoutes.home || "/cancellations"),
    },
    {
      icon: <StarBorderOutlinedIcon fontSize="small" />,
      label: "My Reviews",
      onClick: () => navigate(appRoutes.home || "/reviews"),
    },
    {
      icon: <LogoutOutlinedIcon fontSize="small" />,
      label: "Logout",
      onClick: () => setOpenLogoutDialog(true),
    },
  ];

  const handleLogout = () => {
    logoutHelper();
  };

  return (
    <>
      <div
        className="glass-card fixed right-8 top-20 w-56 rounded-2xl py-3 z-[9999]"
        style={{
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          backgroundColor: "rgba(30, 30, 30, 0.4)", // subtle dark glass
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col space-y-1 text-white">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  item.onClick();
                  if (item.label !== "Logout") onClose();
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition hover:bg-white/20 hover:translate-x-1"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <LogoutDialog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default ProfileDropdown;

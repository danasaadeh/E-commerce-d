import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { Badge, styled, useMediaQuery } from "@mui/material";
import { appRoutes } from "../../../routes";
import { useWishlistStore } from "@/features/wish-list/store";
import { useIsLoggedIn } from "@/features/auth/hooks/is-logged-in";
import ProfileDropdown from "@/shared/components/profile-drop-down";
import SearchDialog from "@/shared/components/search-dialog";
import { useCartStore } from "@/features/cart/store";

// ✅ Custom red badge
const RedBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#DB4444",
    color: "white",
    fontSize: "0.6rem",
    fontWeight: 600,
    minWidth: "16px",
    height: "16px",
    borderRadius: "50%",
  },
}));

const Navbar: React.FC = () => {
  const [lang, setLang] = useState("English");
  const [showMenu, setShowMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ detect current route

  const { wishlist } = useWishlistStore();
  const { items } = useCartStore();
  const { isLoggedIn } = useIsLoggedIn();
  const isMobile = useMediaQuery("(max-width:600px)");

  // ✅ Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpenSearch(true);
      }
      if (e.key === "Escape") setOpenSearch(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".profile-menu")) setShowMenu(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", to: appRoutes.home },
    { label: "Contact", to: appRoutes.contact },
    { label: "About", to: appRoutes.about },
    !isLoggedIn && { label: "Sign Up", to: appRoutes.auth.signUp },
  ].filter(Boolean);

  // ✅ Build nav items with active color
  const menuLinks = (
    <nav className="flex flex-col md:flex-row md:space-x-8 text-sm font-medium">
      {navLinks.map((item: any, index: number) => {
        const isActive =
          location.pathname === item.to ||
          (item.to !== "/" && location.pathname.startsWith(item.to));

        return (
          <Link
            key={index}
            to={item.to}
            onClick={() => setMobileMenu(false)}
            className={`transition-colors ${
              isActive
                ? "text-[#DB4444] font-semibold"
                : "text-black hover:text-[#DB4444]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* 🧭 Fixed Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        {/* 🖤 Top Bar */}
        <div className="bg-black text-white text-xs md:text-sm py-2 px-4 flex items-center justify-between">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
            <Link to="#" className="font-semibold underline ml-1">
              Shop Now
            </Link>
          </p>
          <div className="flex items-center cursor-pointer">
            <span>{lang}</span>
            <IoIosArrowDown className="ml-1" size={14} />
          </div>
        </div>

        {/* 🧭 Main Navbar */}
        <div className="bg-white py-4 px-6 max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigate(appRoutes.home)}
          >
            Exclusive
          </h1>

          {/* Desktop Nav */}
          {!isMobile && menuLinks}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          )}

          {/* Right Icons */}
          <div className="flex items-center gap-4 relative">
            {/* Search */}
            {!isMobile && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products... (Press /)"
                  className="bg-gray-100 rounded-md py-2 px-4 pr-10 text-sm w-64 focus:outline-none cursor-pointer"
                  readOnly
                  onClick={() => setOpenSearch(true)}
                />
                <AiOutlineSearch
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  size={18}
                  onClick={() => setOpenSearch(true)}
                />
              </div>
            )}

            {/* Wishlist */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate(appRoutes.wishList || "/wishlist")}
            >
              <AiOutlineHeart size={22} className="hover:text-[#DB4444]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate(appRoutes.cart || "/cart")}
            >
              <RedBadge
                badgeContent={items.length}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <AiOutlineShoppingCart
                  size={22}
                  className="hover:text-[#DB4444]"
                />
              </RedBadge>
            </div>

            {/* Profile */}
            {isLoggedIn && (
              <div className="relative profile-menu">
                <button
                  onClick={() => setShowMenu((prev) => !prev)}
                  className="cursor-pointer focus:outline-none"
                >
                  <FiUser
                    size={22}
                    className={`transition-colors ${
                      showMenu ? "text-[#DB4444]" : "hover:text-[#DB4444]"
                    }`}
                  />
                </button>
                {showMenu && (
                  <ProfileDropdown onClose={() => setShowMenu(false)} />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobile && mobileMenu && (
          <div className="bg-white border-t border-gray-200 p-4 space-y-3 text-sm">
            {menuLinks}
          </div>
        )}

        {/* Search Dialog */}
        <SearchDialog open={openSearch} onClose={() => setOpenSearch(false)} />
      </header>

      {/* ✅ Spacer to prevent content overlap */}
      <div className="h-[120px]" />
    </>
  );
};

export default Navbar;

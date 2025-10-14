import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link, Button } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
          className="text-sm"
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Home
          </Link>
          <span className="text-gray-900">404 Error</span>
        </Breadcrumbs>
      </div>

      {/* 404 Content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center py-20">
        <h1 className="text-7xl md:text-8xl font-medium text-gray-900 mb-8 tracking-tight">
          404 Not Found
        </h1>

        <p className="text-base text-gray-700 mb-12">
          Your visited page not found. You may go home page.
        </p>

        <Button
          variant="contained"
          onClick={handleBackToHome}
          sx={{
            backgroundColor: "#DB4444",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            padding: "12px 48px",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#C23939",
            },
          }}
        >
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

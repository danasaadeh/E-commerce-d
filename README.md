# E-commerce Website

A modern, full-featured e-commerce application built with React, TypeScript, and Tailwind CSS. This project showcases a complete online shopping experience with product management, user authentication, shopping cart, wishlist, and checkout functionality.

## 🚀 Features

### Core E-commerce Features
- **Product Catalog**: Browse products with categories, filtering, and search
- **Product Details**: Detailed product views with image galleries and specifications
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist**: Save favorite products for later
- **Checkout Process**: Complete order flow with billing and payment
- **User Authentication**: Login/signup with protected routes
- **Responsive Design**: Mobile-first approach with modern UI

### Advanced Features
- **Real-time Search**: Debounced search with instant results
- **Category Management**: Organized product categories with filtering
- **Flash Sales**: Time-limited offers with countdown timers
- **Best Selling Products**: Featured product sections
- **New Arrivals**: Latest product showcases
- **Contact & About**: Company information and contact forms

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.12** - Fast build tool and development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Material-UI 7.3.4** - React component library
- **React Router 7.9.3** - Client-side routing

### State Management & Data Fetching
- **Zustand 5.0.8** - Lightweight state management
- **TanStack Query 5.90.2** - Server state management and caching
- **Axios 1.12.2** - HTTP client for API requests

### Forms & Validation
- **React Hook Form 7.64.0** - Performant forms with easy validation
- **Yup 1.7.1** - Schema validation
- **@hookform/resolvers 5.2.2** - Form validation resolvers

### UI Components & Icons
- **Lucide React 0.544.0** - Beautiful icon library
- **React Icons 5.5.0** - Popular icon packs
- **FontAwesome 7.1.0** - Comprehensive icon library
- **Swiper 12.0.2** - Modern slider/carousel
- **React Countdown 2.3.6** - Countdown timer component

### Development Tools
- **ESLint 9.36.0** - Code linting and formatting
- **TypeScript ESLint 8.44.0** - TypeScript-specific linting rules
- **Vite Plugin SVGR 4.5.0** - SVG as React components

## 📁 Project Structure

```
src/
├── features/                    # Feature-based architecture
│   ├── about/                  # About page feature
│   │   ├── components/         # About-specific components
│   │   ├── pages/             # About page
│   │   └── routes/            # About routing
│   ├── auth/                  # Authentication feature
│   │   ├── components/        # Login/signup forms
│   │   ├── guards/           # Route protection
│   │   ├── hooks/            # Auth-related hooks
│   │   ├── pages/            # Auth pages
│   │   ├── routes/           # Auth routing
│   │   ├── services/         # Auth API services
│   │   ├── storage/          # Auth storage utilities
│   │   ├── types/            # Auth type definitions
│   │   └── utilities/        # Auth helper functions
│   ├── cart/                 # Shopping cart feature
│   │   ├── components/       # Cart components
│   │   ├── config/          # Cart configuration
│   │   ├── pages/           # Cart pages
│   │   ├── routes/          # Cart routing
│   │   ├── store/           # Cart state management
│   │   └── types/           # Cart type definitions
│   ├── checkout/            # Checkout process
│   │   ├── components/      # Checkout components
│   │   ├── config/         # Checkout configuration
│   │   ├── pages/          # Checkout pages
│   │   ├── routes/         # Checkout routing
│   │   └── types/          # Checkout type definitions
│   ├── contact/             # Contact page
│   │   ├── components/      # Contact components
│   │   ├── pages/          # Contact page
│   │   └── routes/         # Contact routing
│   ├── home/               # Home page feature
│   │   ├── components/     # Home page components
│   │   │   ├── best-selling-section/
│   │   │   ├── category-section/
│   │   │   ├── category-sidebar/
│   │   │   ├── explore-products/
│   │   │   ├── flash-sales/
│   │   │   ├── hero-sections/
│   │   │   ├── new-arrival/
│   │   │   └── products/
│   │   ├── pages/          # Home-related pages
│   │   ├── routes/         # Home routing
│   │   ├── services/       # Home API services
│   │   └── types/          # Home type definitions
│   ├── product-details/    # Product details feature
│   │   ├── components/     # Product detail components
│   │   ├── pages/         # Product detail pages
│   │   ├── routes/        # Product detail routing
│   │   ├── services/      # Product detail API
│   │   └── types/         # Product detail types
│   └── wish-list/         # Wishlist feature
│       ├── components/    # Wishlist components
│       ├── pages/        # Wishlist pages
│       ├── routes/       # Wishlist routing
│       └── store/        # Wishlist state management
├── shared/                # Shared components and utilities
│   ├── components/       # Reusable components
│   │   ├── app-logo/
│   │   ├── back-to-top/
│   │   ├── divider/
│   │   ├── forms/
│   │   ├── loader/
│   │   ├── log-out-dialog/
│   │   ├── profile-drop-down/
│   │   └── search-dialog/
│   ├── hooks/           # Shared custom hooks
│   │   └── debounce.ts
│   └── layout/          # Layout components
│       ├── default-layout/
│       ├── footer/
│       ├── layout-container/
│       ├── navbar/
│       └── products-container/
├── lib/                 # Third-party library configurations
│   ├── axios/          # Axios configuration
│   └── storage/        # Storage utilities
├── routes/             # Application routing
│   ├── index.ts       # Route definitions
│   └── provider.tsx   # Router provider
├── theme/             # Theme configuration
│   ├── theme-provider.tsx
│   └── theme.ts
├── assets/            # Static assets
│   ├── icons/         # Icon assets
│   └── images/        # Image assets
├── App.tsx            # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint for code quality checks

## 🎯 Key Features Implementation

### Product Management
- **Product Listing**: Displays products with pagination and filtering
- **Product Search**: Real-time search with debounced input
- **Category Filtering**: Filter products by categories
- **Product Details**: Comprehensive product information with image galleries

### Shopping Experience
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist**: Save and manage favorite products
- **Checkout Process**: Multi-step checkout with billing and payment
- **Order Management**: Track and manage orders

### User Experience
- **Authentication**: Secure login/signup with route protection
- **Responsive Design**: Mobile-first responsive layout
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: User-friendly error messages and fallbacks
- **Toast Notifications**: Success and error feedback

### State Management
- **Zustand Stores**: Lightweight state management for cart, wishlist, and auth
- **TanStack Query**: Efficient server state management with caching
- **React Hook Form**: Optimized form handling with validation

## 🎨 UI/UX Features

### Design System
- **Material-UI Components**: Consistent design language
- **Tailwind CSS**: Utility-first styling approach
- **Custom Theme**: Branded color scheme and typography
- **Responsive Layout**: Mobile-first responsive design

### Interactive Elements
- **Swiper Carousels**: Smooth image and content sliders
- **Countdown Timers**: Flash sale countdowns
- **Search Dialog**: Modal search interface
- **Profile Dropdown**: User account management
- **Back to Top**: Smooth scroll to top functionality

## 🔧 Configuration

### Vite Configuration
- **React Plugin**: Fast React development with HMR
- **Tailwind CSS Plugin**: Integrated Tailwind CSS support
- **Path Aliases**: Clean import paths with `@/` alias
- **SVG Support**: SVG as React components with SVGR

### TypeScript Configuration
- **Strict Mode**: Enhanced type checking
- **Path Mapping**: Resolved import paths
- **Modern Target**: Latest JavaScript features

### ESLint Configuration
- **React Hooks**: React-specific linting rules
- **TypeScript**: TypeScript-specific rules
- **Modern Standards**: Latest JavaScript/TypeScript standards

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The built files will be generated in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Zero-config deployment for React apps
- **Netlify**: Static site hosting with CI/CD
- **AWS S3**: Scalable static website hosting
- **GitHub Pages**: Free hosting for public repositories

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run linting and tests**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📝 License

This project is private and proprietary. All rights reserved.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
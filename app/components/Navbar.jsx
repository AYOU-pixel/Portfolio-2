"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Style constants
const desktopButtonSx = {
  textTransform: "none",
  fontSize: { xs: "0.875rem", sm: "1rem" },
  padding: { xs: "4px 8px", sm: "6px 12px" },
  position: "relative",
  "&:hover": { backgroundColor: "transparent" },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: "0",
    width: "0%",
    height: "2px",
    backgroundColor: "#6366f1",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
};

const hireMeButtonSx = {
  textTransform: "none",
  borderRadius: "8px",
  padding: { xs: "6px 12px", sm: "8px 16px" },
  fontSize: { xs: "0.875rem", sm: "1rem" },
  background: "linear-gradient(45deg, #4f46e5 30%, #7c3aed 90%)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 6px 12px rgba(79, 70, 229, 0.3)",
  },
};

const menuPaperProps = {
  sx: {
    backgroundColor: "rgba(26, 32, 44, 0.98)",
    backdropFilter: "blur(12px)",
    color: "white",
    borderRadius: "12px",
    padding: "8px 0",
    minWidth: { xs: "100%", sm: "240px" },
    maxWidth: { xs: "calc(100% - 32px)", sm: "none" },
    left: { xs: "16px !important", sm: "auto !important" },
    right: { xs: "16px !important", sm: "auto !important" },
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },
};

const navLinks = [
  { href: "/About", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMenu = Boolean(anchorEl);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Handle initial scroll state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    setIsMobileMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-gray-900/95 shadow-xl backdrop-blur-md py-2"
            : "bg-transparent backdrop-blur-none py-3 sm:py-4"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Logo */}
        <Link href="/" className="group flex items-center" aria-label="Home">
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="(max-width: 640px) 36px, (max-width: 768px) 40px, 48px"
              className="rounded-full object-contain"
              priority
              onError={(e) => {
                e.target.src = "/fallback-logo.png";
              }}
            />
          </div>
          <span className="ml-3 text-white font-medium hidden sm:block">
            Your Name
          </span>
        </Link>

        {/* Desktop Navigation - Adjust breakpoints from md to lg */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-6">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              className="text-gray-200 hover:text-indigo-300 font-medium"
              sx={desktopButtonSx}
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="contained"
            component={Link}
            href="/Contact"
            sx={hireMeButtonSx}
            className="ml-2"
          >
            Hire Me
          </Button>
        </div>

        {/* Tablet Navigation - New breakpoint for medium screens */}
        <div className="hidden md:flex lg:hidden items-center">
          <Button
            variant="contained"
            component={Link}
            href="/Contact"
            sx={hireMeButtonSx}
            className="mr-4"
          >
            Hire Me
          </Button>
          
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-label="Open menu"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
            }}
          >
            {isMobileMenuOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </IconButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-label="Open menu"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
            }}
          >
            {isMobileMenuOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile and Tablet Navigation Menu */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        transitionDuration={300}
        PaperProps={menuPaperProps}
        MenuListProps={{ 
          sx: { 
            padding: "8px 0",
            maxHeight: { xs: "calc(100vh - 100px)", sm: "none" },
            overflowY: "auto"
          } 
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)"
            }
          }
        }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.href}
            onClick={handleMenuClose}
            sx={{
              padding: { xs: "16px 20px", sm: "12px 20px" },
              fontSize: { xs: "1.125rem", sm: "1rem" },
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            <Link
              href={link.href}
              className="w-full text-gray-200 hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </Link>
          </MenuItem>
        ))}
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            padding: { xs: "16px 20px", sm: "12px 20px" },
            marginTop: "4px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: { xs: "1.125rem", sm: "1rem" },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
          }}
        >
          <Link
            href="/Contact"
            className="w-full font-medium text-indigo-400 hover:text-indigo-300"
          >
            Hire Me
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}
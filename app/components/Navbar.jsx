"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Style constants
const desktopButtonSx = {
  textTransform: "none",
  fontSize: "1rem",
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
  padding: "8px 16px",
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
    minWidth: "200px",
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
  const openMenu = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-gray-900/95 shadow-xl backdrop-blur-md"
            : "bg-transparent backdrop-blur-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-24 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="group" aria-label="Home">
          <div className="w-10 h-10 sm:w-14 sm:h-14 relative rounded-full transform transition-all duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="(max-width: 640px) 40px, 56px"
              className="rounded-full object-contain"
              priority
              onError={(e) => {
                e.target.src = "/fallback-logo.png";
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
          >
            Hire Me
          </Button>
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
            <MenuIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        transitionDuration={200}
        PaperProps={menuPaperProps}
        MenuListProps={{ sx: { padding: 0 } }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.href}
            onClick={handleMenuClose}
            sx={{
              padding: "12px 20px",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            <Link
              href={link.href}
              className="w-full text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </Link>
          </MenuItem>
        ))}
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            padding: "12px 20px",
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
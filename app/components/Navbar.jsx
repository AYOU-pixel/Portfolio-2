"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { href: "/About", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-12 lg:px-24">
        {/* Logo/Brand Name */}
        <Link href="/">
          <div className="w-16 h-16 rounded-full transform transition-transform duration-700 hover:scale-110 hover:rotate-6 hover:shadow-lg cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="rounded-full"
              onError={(e) => {
                e.target.src = "/fallback-logo.png"; // Fallback image
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 font-semibold"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                position: "relative",
                "&:hover": { backgroundColor: "transparent" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#6366f1",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-label="menu"
            edge="start"
            className="text-white"
            sx={{ "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        className="md:hidden"
        transitionDuration={250}
        PaperProps={{
          sx: {
            backgroundColor: "#1a202c", // Match the navbar's background color
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            minWidth: "200px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
        MenuListProps={{
          sx: {
            padding: "0",
          },
        }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.href}
            onClick={handleMenuClose}
            sx={{
              padding: "8px 16px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link
              href={link.href}
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 w-full"
            >
              {link.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}
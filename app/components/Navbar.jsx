"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav 
      className={`
        fixed w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-gray-900 shadow-lg backdrop-blur-md bg-opacity-80 sm:bg-opacity-90' 
          : 'bg-transparent'}
        animate-fade-in-down
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-24 py-4">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full transform transition-all duration-700 
            group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
              onError={(e) => {
                e.target.src = "/fallback-logo.png";
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 sm:space-x-8">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              className="text-gray-300 hover:text-indigo-400 transition-all duration-300 font-semibold group"
              sx={{
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
              }}
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button
            variant="contained"
            color="primary"
            href="/Contact"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-white"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              padding: "8px 16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
              }
            }}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-label="menu"
            edge="start"
            className="text-white"
            sx={{ 
              "&:hover": { 
                backgroundColor: "rgba(255, 255, 255, 0.1)" 
              },
              fontSize: "2rem",
            }}
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
            backgroundColor: "#1a202c",
            color: "white",
            borderRadius: "12px",
            padding: "10px",
            minWidth: "240px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
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
              padding: "16px 20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link
              href={link.href}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 w-full"
            >
              {link.label}
            </Link>
          </MenuItem>
        ))}

        {/* Mobile Call to Action */}
        <MenuItem 
          sx={{
            padding: "16px 20px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <Link
            href="/Contact"
            className="w-full text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-300"
          >
            Hire Me
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}
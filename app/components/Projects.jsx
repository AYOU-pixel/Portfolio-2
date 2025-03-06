"use client";

import { Button, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A feature-rich online store built with Next.js and Tailwind CSS, offering seamless user experience and lightning-fast performance.",
    image: "/stor.png",
    link: "https://ayou-store.netlify.app",
  },
  {
    title: "Sneaker Store",
    description:
      "The project is a sleek e-commerce website for sneakers, showcasing products with essential details and offering a smooth shopping experience.",
    image: "/eco.png",
    link: "https://ayou-store.netlify.app",
  },
  {
    title: "Portfolio",
    description:
      "A feature-rich online store built with Next.js and Tailwind CSS, offering seamless user experience and lightning-fast performance.",
    image: "/port.png",
    link: "https://portfolioapping.netlify.app/",
  }
];

// Keyframes animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const ProjectCard = ({ title, description, image, link }) => (
  <Card
    sx={{
      background: "rgba(15, 23, 42, 0.6)",
      backdropFilter: "blur(12px)",
      borderRadius: "16px",
      border: "1px solid rgba(34, 211, 238, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 8px 32px rgba(34, 211, 238, 0.1)",
      },
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="hover:scale-105 transition-transform duration-300"
      />
    </div>

    <CardContent sx={{ flexGrow: 1, p: 4 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          background: "linear-gradient(45deg, #22d3ee, #34d399)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#94a3b8" }}>
        {description}
      </Typography>
    </CardContent>

    <CardContent sx={{ pt: 0, pb: 3, textAlign: "center" }}>
      <Button
        variant="contained"
        href={link}
        sx={{
          background: "linear-gradient(45deg, #22d3ee, #34d399)",
          borderRadius: "8px",
          px: 4,
          py: 1.5,
          fontWeight: 500,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            background: "linear-gradient(45deg, #6b21a8, #8b5cf6)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 16px rgba(107, 33, 168, 0.5)",
          },
          "&:active": {
            transform: "scale(0.95)",
            boxShadow: "0 2px 8px rgba(107, 33, 168, 0.3)",
          },
        }}
      >
        View Project
      </Button>
    </CardContent>
  </Card>
);

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            sx={{
              fontSize: "3.5rem",
              fontWeight: 800,
              mb: 3,
              background: "linear-gradient(45deg, #22d3ee, #34d399)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: `${fadeIn} 0.6s ease-out`,
            }}
          >
            My Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#e2e8f0",
              fontSize: "1.125rem",
              maxWidth: "600px",
              mx: "auto",
              opacity: 0.9,
              animation: `${fadeIn} 0.6s ease-out 0.2s`,
              animationFillMode: "backwards",
            }}
          >
            A collection of impactful projects solving real-world problems with modern web solutions.
          </Typography>
        </div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>

        <div className="text-center mt-12">
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #22d3ee, #34d399)",
              borderRadius: "8px",
              px: 4,
              py: 1.5,
              fontWeight: 500,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(45deg, #6b21a8, #8b5cf6)",
                transform: "scale(1.05)",
                boxShadow: "0 4px 16px rgba(107, 33, 168, 0.5)",
              },
              "&:active": {
                transform: "scale(0.95)",
                boxShadow: "0 2px 8px rgba(107, 33, 168, 0.3)",
              },
            }}
          >
            View More Projects
          </Button>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-3 h-8 border-2 border-cyan-400 rounded-full">
          <div className="w-1 h-2 bg-cyan-400 mx-auto mt-1 animate-scroll" />
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled("section")({
  position: "relative",
  minHeight: "100vh",
  padding: "8rem 0",
  background: `
    linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.98) 0%,
      rgba(30, 58, 138, 0.95) 100%
    ),
    url('/grid.svg')
  `,
  backgroundSize: "cover",
  backdropFilter: "blur(4px)",
});

export default Projects;
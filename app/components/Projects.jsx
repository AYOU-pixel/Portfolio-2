"use client";

import { useMemo } from "react";
import { Button, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Eye } from "lucide-react";

// Project data with unique IDs
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A feature-rich online store built with Next.js and Tailwind CSS...",
    image: "/stor.png",
    link: "https://ayou-store.netlify.app",
  },
  {
    id: 2,
    title: "Sneaker Store",
    description: "Sleek e-commerce website for sneakers with smooth shopping experience...",
    image: "/eco.png",
    link: "https://ecomerc-wm.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Modern portfolio showcasing development projects...",
    image: "/port.png",
    link: "https://portfolioapping.netlify.app/",
  }
];

// Keyframes animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shine = keyframes`
  0% { background-position: -100px; }
  60% { background-position: 200px; }
  100% { background-position: 200px; }
`;

// Improved card styles
const cardStyles = {
  background: "rgba(15, 23, 42, 0.85)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba(34, 211, 238, 0.15)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 32px rgba(34, 211, 238, 0.2)",
    border: "1px solid rgba(34, 211, 238, 0.3)",
  },
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// Improved title gradient
const titleGradient = {
  background: "linear-gradient(45deg, #f8fafc, #e2e8f0)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const ProjectCard = ({ title, description, image, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageError = (e) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = '/fallback-project.png';
    }
  };

  return (
    <Card
      ref={ref}
      sx={{
        ...cardStyles,
        opacity: inView ? 1 : 0,
        animation: inView ? `${fadeIn} 0.6s ease-out` : 'none',
      }}
    >
      <div style={{ 
        position: "relative", 
        height: "220px", 
        overflow: "hidden",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ 
            objectFit: "cover", 
            objectPosition: "center top" 
          }}
          className="hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
        />
        {/* Shimmer effect overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            transform: "translateX(-100%)",
            animation: `${shine} 3s infinite`,
            pointerEvents: "none",
          }}
        />
      </div>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            ...titleGradient, 
            mb: 1.5, 
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: "#cbd5e1", 
            fontWeight: 500,
            fontSize: "0.95rem",
            lineHeight: 1.6,
            "&:hover": { color: "#f1f5f9" } 
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardContent sx={{ pt: 0, pb: 3, textAlign: "center" }}>
        <Button
          variant="contained"
          href={link}
          startIcon={<Eye size={18} />}
          sx={{
            background: "linear-gradient(45deg, #22d3ee, #34d399)",
            borderRadius: "8px",
            px: 3,
            py: 1,
            fontWeight: 500,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: "linear-gradient(45deg, #22d3ee, #34d399)",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 16px rgba(34, 211, 238, 0.3)",
            },
          }}
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const sectionTitleStyles = useMemo(() => ({
    fontSize: "2.75rem",
    fontWeight: 800,
    mb: 2,
    ...titleGradient,
    animation: `${fadeIn} 0.6s ease-out`,
  }), []);

  return (
    <SectionWrapper id="projects">
      <Container maxWidth="lg">
        <div className="text-center mb-10">
          <Typography variant="h2" sx={sectionTitleStyles}>
            My Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#f1f5f9",
              fontSize: "1.125rem",
              fontWeight: 500,
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
              opacity: 0.95,
              animation: `${fadeIn} 0.6s ease-out 0.2s`,
              animationFillMode: "backwards",
            }}
          >
            A collection of impactful projects solving real-world problems with modern web solutions.
          </Typography>
        </div>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>

        <div className="text-center mt-10">
          <Button
            variant="outlined"
            href="/morproject"
            startIcon={<Eye size={18} />}
            sx={{
              color: "#f1f5f9",
              borderColor: "rgba(34, 211, 238, 0.5)",
              borderRadius: "8px",
              px: 3,
              py: 1,
              fontSize: "0.95rem",
              fontWeight: 500,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                borderColor: "#22d3ee",
                background: "rgba(34, 211, 238, 0.1)",
                transform: "scale(1.02)",
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
  padding: "6rem 0",
  background: `
    linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.98) 0%,
      rgba(15, 23, 42, 0.95) 40%,
      rgba(30, 58, 138, 0.9) 100%
    ),
    url('/grid.svg')
  `,
  backgroundSize: "cover",
  backdropFilter: "blur(4px)",
});

export default Projects;
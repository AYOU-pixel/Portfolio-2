"use client";

import { Button, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";

// Project data (can be moved to a separate file)
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A feature-rich online store built with Next.js and Tailwind CSS, offering seamless user experience and lightning-fast performance.",
    image: "/stor.png",
    link: "https://ayou-store.netlify.app",
  },
  {
    title: "Portfolio Website",
    description:
      "An elegant personal website showcasing creative projects, skills, and achievements with a focus on responsive design.",
    image: "/port.png",
    link: "https://portfolioapping.netlify.app",
  },
  {
    title: "Social Media App",
    description:
      "A modern social networking app with real-time messaging and dynamic user interactions, leveraging advanced web technologies.",
    image: "/msg.png",
    link: "https://watsap-msg.netlify.app",
  },
];

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Reusable ProjectCard component
const ProjectCard = ({ title, description, image, link }) => (
  <Card
    sx={{
      backgroundColor: "#1a202c",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      },
      height: "100%",
      display: "flex",
      flexDirection: "column",
      animation: `${fadeIn} 0.5s ease-in-out`,
    }}
  >
    {/* Project Image */}
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Image
        src={image}
        alt={`${title} image`}
        fill
        style={{ objectFit: "cover" }}
        loading="lazy"
        onError={(e) => {
          e.target.src = "/fallback-image.png"; // Fallback image
        }}
      />
    </div>

    <CardContent sx={{ flexGrow: 1, padding: 4 }}>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          color: "#667eea",
          fontWeight: "bold",
          mb: 2,
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#764ba2",
          },
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#cbd5e0" }}>
        {description}
      </Typography>
    </CardContent>

    {/* View Project Button */}
    <CardContent sx={{ paddingTop: 0, textAlign: "center", paddingBottom: 3 }}>
      <Button
        variant="contained"
        color="primary"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project`}
        sx={{
          borderRadius: "50px",
          padding: "12px 24px",
          textTransform: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
            transform: "scale(1.05)",
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
        {/* Title */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg, #667eea, #764ba2, #667eea)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: `${gradientAnimation} 5s ease infinite`,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontSize: "1.125rem",
              color: "gray",
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.8,
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            A collection of my most impactful projects, designed and developed to solve real-world problems with innovative solutions.
          </Typography>
        </div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

// Styled Section Wrapper
const SectionWrapper = styled("section")({
  background: "linear-gradient(to bottom, #1a202c, #2d3748)",
  paddingTop: "80px",
  paddingBottom: "80px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('/starry-bg.svg') no-repeat center center fixed",
    backgroundSize: "cover",
    animation: "twinkle 5s infinite alternate",
  },
  "@keyframes twinkle": {
    "0%": {
      opacity: 0.5,
    },
    "50%": {
      opacity: 0.8,
    },
    "100%": {
      opacity: 0.5,
    },
  },
});

export default Projects;

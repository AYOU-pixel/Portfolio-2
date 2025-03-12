"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Eye, Search } from "lucide-react";

// Styled components with emotion/styled
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// MUI components with tree-shaking imports for better performance
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import InputAdornment from "@mui/material/InputAdornment";

// Define the projects array with more detailed information
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A feature-rich online store built with Next.js and Tailwind CSS that includes product filtering, cart functionality, payment processing, and responsive design.",
    image: "/stor.png",
    link: "https://ayou-store.netlify.app",
    category: "e-commerce",
    tech: ["Next.js", "TailwindCSS", "Stripe"]
  },
  {
    id: 2,
    title: "Sneaker Store",
    description: "Sleek e-commerce website for sneakers with smooth shopping experience, customer reviews, and real-time inventory tracking.",
    image: "/eco.png",
    link: "https://ecomerc-wm.vercel.app/",
    category: "e-commerce",
    tech: ["React", "Redux", "Node.js"]
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Modern portfolio showcasing development projects with interactive elements and smooth animations.",
    image: "/port.png",
    link: "https://portfolioapping.netlify.app/",
    category: "personal",
    tech: ["React", "Framer Motion", "GSAP"]
  }
];

// Optimized animations with better performance
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(56, 189, 248, 0.5); }
  50% { box-shadow: 0 0 15px rgba(56, 189, 248, 0.8); }
  100% { box-shadow: 0 0 5px rgba(56, 189, 248, 0.5); }
`;

// Styled components for better organization and performance
const SectionWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    hsl(217, 50%, 10%) 0%,
    hsl(217, 50%, 12%) 40%,
    hsl(222, 65%, 20%) 100%
  );
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/grid.svg');
    background-size: cover;
    opacity: 0.1;
    pointer-events: none;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  background: rgba(17, 24, 39, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(56, 189, 248, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    border: 1px solid rgba(56, 189, 248, 0.4);
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.5), 0 0 15px rgba(56, 189, 248, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 80%, rgba(17, 24, 39, 0.8) 100%);
    pointer-events: none;
  }
`;

const TechChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ScrollToTopButton = styled(Fab)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  background: linear-gradient(45deg, #38bdf8, #0ea5e9);
  animation: ${glow} 2s infinite ease-in-out;
  
  &:hover {
    background: linear-gradient(45deg, #0ea5e9, #0284c7);
  }
`;

// Custom styled MUI components
const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  background: rgba(17, 24, 39, 0.6);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledToggleButton = styled(ToggleButton)`
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  padding: 8px 16px;
  border: none;
  
  &.Mui-selected {
    background: linear-gradient(45deg, #38bdf8, #0ea5e9);
    color: #fff;
  }
  
  &:hover {
    background: rgba(56, 189, 248, 0.2);
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: rgba(17, 24, 39, 0.6);
    border-radius: 8px;
    color: #e2e8f0;
    
    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(56, 189, 248, 0.3);
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(56, 189, 248, 0.5);
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #38bdf8;
    }
  }
  
  .MuiInputLabel-root {
    color: #94a3b8;
  }
  
  .MuiInputAdornment-root {
    color: #94a3b8;
  }
`;

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        animation: inView ? `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)` : 'none',
        height: '100%'
      }}
    >
      <StyledCard>
        <ImageContainer>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ 
              objectFit: "cover", 
              objectPosition: "center top",
              transition: "transform 0.5s ease"
            }}
            className="hover:scale-105"
            loading="lazy"
            onError={(e) => {e.currentTarget.src = '/fallback-project.png'}}
          />
        </ImageContainer>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              backgroundImage: 'linear-gradient(45deg, #f8fafc, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              mb: 2,
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              letterSpacing: '-0.02em'
            }}
          >
            {project.title}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#cbd5e1", 
              lineHeight: 1.6,
              fontSize: '0.95rem',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {project.description}
          </Typography>
          
          <TechChipContainer>
            {project.tech.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.75rem'
                }}
              />
            ))}
          </TechChipContainer>
        </CardContent>

        <CardContent sx={{ pt: 0, pb: 3, textAlign: "center" }}>
          <Button
            variant="contained"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Eye size={18} />}
            sx={{
              background: "linear-gradient(45deg, #38bdf8, #0ea5e9)",
              borderRadius: "8px",
              px: 3,
              py: 1.2,
              fontWeight: 600,
              fontSize: '0.9rem',
              fontFamily: "'Inter', sans-serif",
              textTransform: 'none',
              letterSpacing: '0.01em',
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              "&:hover": {
                background: "linear-gradient(45deg, #0ea5e9, #0284c7)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 16px rgba(2, 132, 199, 0.4)",
              },
            }}
          >
            View Project
          </Button>
        </CardContent>
      </StyledCard>
    </div>
  );
};

const MoreProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => 
    projects.filter(project => 
      (selectedCategory === 'all' || project.category === selectedCategory) &&
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       project.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ), [selectedCategory, searchQuery]);

  // Handle scroll event to show/hide scroll to top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        {/* Header Section */}
        <HeaderSection>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              background: "linear-gradient(45deg, #f8fafc, #e2e8f0)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.03em',
              lineHeight: 1.2
            }}
          >
            My Complete Projects
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{
              color: "#f1f5f9",
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 500,
              maxWidth: "650px",
              margin: "0 auto 2.5rem",
              opacity: 0.95,
              animation: `${fadeIn} 0.6s ease-out 0.2s`,
              animationFillMode: "backwards",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
              px: { xs: 2, md: 0 }
            }}
          >
            Explore detailed case studies of my work, including GitHub repositories 
            and live deployment links. Each project showcases different skills and technologies.
          </Typography>
        </HeaderSection>

        {/* Filters Section */}
        <FiltersContainer>
          <StyledToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={(e, newVal) => newVal && setSelectedCategory(newVal)}
            aria-label="project category filter"
          >
            <StyledToggleButton value="all">All Projects</StyledToggleButton>
            <StyledToggleButton value="e-commerce">E-Commerce</StyledToggleButton>
            <StyledToggleButton value="personal">Personal</StyledToggleButton>
          </StyledToggleButtonGroup>

          <StyledTextField
            placeholder="Search projects..."
            variant="outlined"
            fullWidth
            sx={{ maxWidth: { xs: '100%', sm: '320px' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} color="#94a3b8" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </FiltersContainer>

        {/* Projects Grid with conditional rendering for no results */}
        {filteredProjects.length > 0 ? (
          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#94a3b8', 
                fontFamily: "'Inter', sans-serif", 
                mb: 2 
              }}
            >
              No projects found
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#64748b', 
                fontFamily: "'Inter', sans-serif" 
              }}
            >
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        )}
      </Container>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <ScrollToTopButton
          onClick={scrollToTop}
          size="medium"
          aria-label="scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="white" />
          </svg>
        </ScrollToTopButton>
      )}
    </SectionWrapper>
  );
};

export default MoreProjects;
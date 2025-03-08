"use client";
import { Typography, Button, IconButton, LinearProgress, Rating } from "@mui/material";
import {
  GitHub,
  Code,
  Book,
  DesignServices,
  IntegrationInstructions,
  Web,
  Storage,
  Build,
  SportsEsports,
  MusicNote,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const subtleHover = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Keeping the original dark theme with some improvements
const colors = {
  background: "#1e1e1e",
  cardBg: "#2a2a2a",
  primary: "#4da8da",
  secondary: "#1e90ff",
  textPrimary: "#e0e0e0",
  textSecondary: "#b0b0b0",
  accent: "#ff7e5f",
};

// Emotion Styles
const Container = styled.div`
  background: linear-gradient(to bottom, ${colors.background}, #121212);
  color: ${colors.textPrimary};
  min-height: 100vh;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
  font-family: 'Inter', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
  scroll-margin-top: 2rem;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
  background: ${colors.cardBg};
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 200px; // العرض
  aspect-ratio: 1/1; // جعل الحاوية مربعة
  border-radius: 50%; // جعل الصورة دائرية
  overflow: hidden; // التأكد من أن الصورة لا تتجاوز الحدود الدائرية
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); // إضافة ظل
  transition: transform 0.3s ease, box-shadow 0.3s ease; // إضافة تأثيرات تحويل وظل

  &:hover {
    transform: scale(1.05); // تكبير الصورة قليلاً عند التمرير فوقها
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4); // زيادة الظل عند التمرير فوقها
  }

  @media (min-width: 768px) {
    width: 220px; // زيادة الحجم للأجهزة الكبيرة
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    bottom: -10px;
    left: 0;
    border-radius: 2px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled(IconButton)`
  color: ${colors.primary};
  transition: transform 0.3s, color 0.3s;
  background: rgba(77, 168, 218, 0.1);

  &:hover {
    transform: scale(1.1);
    color: ${colors.secondary};
    background: rgba(77, 168, 218, 0.2);
  }
`;

const HobbiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const HobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    animation: ${subtleHover} 2s ease infinite;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-transform: none;

  &:hover {
    background: linear-gradient(45deg, ${colors.secondary}, ${colors.primary});
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }
`;

const ExperienceCard = styled.div`
  padding: 2rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  border-left: 4px solid ${colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialButton = styled(Button)`
  background: rgba(42, 42, 42, 0.8);
  color: ${colors.textPrimary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  transition: all 0.3s ease;
  text-transform: none;
  
  &:hover {
    background: ${props => props.hovercolor || colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const TestimonialCard = styled.div`
  padding: 2rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:before {
    content: """;
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 4rem;
    color: ${colors.secondary};
    opacity: 0.3;
  }
`;

const CurrentProjectCard = styled.div`
  padding: 2rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  border-top: 4px solid ${colors.accent};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default function About() {
  // Sample skill data with proficiency levels
  const skills = [
    { 
      name: "React", 
      icon: <IntegrationInstructions />, 
      category: "Core Technologies",
      proficiency: 90,
      description: "Building modern UI components and state management"
    },
    { 
      name: "Next.js", 
      icon: <Code />, 
      category: "Core Technologies",
      proficiency: 85,
      description: "Server-side rendering and static site generation"
    },
    { 
      name: "JavaScript", 
      icon: <Code />, 
      category: "Core Technologies",
      proficiency: 92,
      description: "ES6+, async/await, functional programming"
    },
    { 
      name: "Tailwind CSS", 
      icon: <Web />, 
      category: "Tools & Libraries",
      proficiency: 88,
      description: "Utility-first CSS for rapid UI development"
    },
    { 
      name: "Material UI", 
      icon: <DesignServices />, 
      category: "Tools & Libraries",
      proficiency: 80,
      description: "Component library for professional UI designs"
    },
    { 
      name: "Git", 
      icon: <GitHub />, 
      category: "Project Management",
      proficiency: 85,
      description: "Version control and collaborative development"
    },
    { 
      name: "Backend Development", 
      icon: <Storage />, 
      category: "Core Technologies",
      proficiency: 75,
      description: "API design, database management, and server architecture"
    },
    { 
      name: "UI/UX Design", 
      icon: <Build />, 
      category: "Tools & Libraries",
      proficiency: 70,
      description: "User-centered design and interface prototyping"
    },
  ];

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <Container>
      {/* Hero Section */}
      <Section id="hero">
        <HeroContainer>
          <div>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: "2.8rem", fontWeight: "700", mb: "1.5rem", color: colors.textPrimary }}
            >
              Hello, I'm Ayoub
            </Typography>
            <Typography 
              variant="body1" 
              style={{ 
                fontSize: "1.1rem", 
                marginBottom: "2rem", 
                color: colors.textSecondary,
                lineHeight: 1.6
              }}
            >
              I am a web developer specializing in building modern and fast applications. 
              My passion lies in developing distinctive user experiences and innovative 
              software solutions using React, Next.js, and modern frontend technologies.
            </Typography>
            <SocialContainer>
              <StyledButton variant="contained" aria-label="Contact me">
                Contact me
              </StyledButton>
              <SocialButton 
                variant="contained" 
                startIcon={<GitHub />} 
                aria-label="View my projects on GitHub"
                hovercolor="#333"
              >
                View Projects
              </SocialButton>
            </SocialContainer>
          </div>
          <HeroImageContainer>
            <Image
              src="/ayoub.webp"
              alt="Profile Picture of Ayoub"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </HeroImageContainer>
        </HeroContainer>
      </Section>

      {/* What I'm working on Section */}
      <Section id="current-projects">
        <SectionTitle variant="h4">What I'm Currently Working On</SectionTitle>
        <CurrentProjectCard>
          <Typography variant="h6" style={{ fontWeight: "600", marginBottom: "1rem" }}>
            Personal Portfolio Redesign
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            Revamping my personal website with improved UI/UX, better performance, 
            and showcasing my latest projects. Using Next.js 14 with App Router and Tailwind CSS.
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={75} 
            sx={{ 
              height: 8, 
              borderRadius: 5,
              backgroundColor: 'rgba(30, 144, 255, 0.2)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: colors.primary,
                borderRadius: 5,
              }
            }} 
          />
          <Typography variant="body2" style={{ marginTop: "0.5rem", color: colors.textSecondary }}>
            75% Complete
          </Typography>
        </CurrentProjectCard>
        <CurrentProjectCard>
          <Typography variant="h6" style={{ fontWeight: "600", marginBottom: "1rem" }}>
            E-commerce Dashboard
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            Building an analytics dashboard for online stores with real-time data visualization, 
            inventory management, and sales reporting. Using React, Material UI, and Chart.js.
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={40} 
            sx={{ 
              height: 8, 
              borderRadius: 5,
              backgroundColor: 'rgba(30, 144, 255, 0.2)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: colors.primary,
                borderRadius: 5,
              }
            }} 
          />
          <Typography variant="body2" style={{ marginTop: "0.5rem", color: colors.textSecondary }}>
            40% Complete
          </Typography>
        </CurrentProjectCard>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle variant="h4">Skills and Expertise</SectionTitle>
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} style={{ marginBottom: '2rem' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                marginBottom: '1rem',
                fontWeight: 600,
                color: colors.textPrimary
              }}
            >
              {category}
            </Typography>
            <SkillGrid>
              {categorySkills.map((skill) => (
                <SkillCard key={skill.name}>
                  <SkillHeader>
                    <IconWrapper aria-label={`Skill: ${skill.name}`}>
                      {skill.icon}
                    </IconWrapper>
                    <div>
                      <Typography variant="h6" style={{ fontWeight: "600" }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color={colors.textSecondary}>
                        {skill.description}
                      </Typography>
                    </div>
                  </SkillHeader>
                  <div>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.proficiency} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(30, 144, 255, 0.2)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: colors.primary,
                          borderRadius: 5,
                        }
                      }} 
                    />
                    <Typography variant="body2" align="right" style={{ marginTop: "0.5rem", color: colors.textSecondary }}>
                      {skill.proficiency}%
                    </Typography>
                  </div>
                </SkillCard>
              ))}
            </SkillGrid>
          </div>
        ))}
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle variant="h4">Experience</SectionTitle>
        <ExperienceCard>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Freelance Developer
          </Typography>
          <Typography
            variant="body2"
            style={{ color: colors.textSecondary, marginBottom: "1rem" }}
          >
            January 2022 - Present
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            Built multiple client projects, focusing on responsive design and
            modern frameworks including React, Next.js, and Material UI.
          </Typography>
          <Typography variant="body1">
            Key achievements:
          </Typography>
          <ul style={{ color: colors.textSecondary }}>
            <li>Reduced page load times by 40% through code optimization</li>
            <li>Implemented responsive designs that work across all device sizes</li>
            <li>Delivered projects on time and within budget for 15+ clients</li>
          </ul>
        </ExperienceCard>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials">
        <SectionTitle variant="h4">What Others Say About Me</SectionTitle>
        <TestimonialCard>
          <Typography variant="body1" style={{ marginBottom: "1rem", fontStyle: "italic" }}>
            "Ayoub delivered an exceptional website for our business. His attention to detail
            and technical expertise helped us increase our online presence significantly."
          </Typography>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                Sarah Johnson
              </Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                Marketing Director, TechSolutions Inc.
              </Typography>
            </div>
            <Rating value={5} readOnly size="small" sx={{
              color: colors.primary,
              '& .MuiRating-iconEmpty': {
                color: 'rgba(77, 168, 218, 0.3)'
              }
            }} />
          </div>
        </TestimonialCard>
        <TestimonialCard>
          <Typography variant="body1" style={{ marginBottom: "1rem", fontStyle: "italic" }}>
            "Working with Ayoub was a pleasure. He understood our requirements perfectly and
            implemented them with efficiency and creativity. I highly recommend his services."
          </Typography>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                Michael Roberts
              </Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                Founder, CreativeMinds
              </Typography>
            </div>
            <Rating value={5} readOnly size="small" sx={{
              color: colors.primary,
              '& .MuiRating-iconEmpty': {
                color: 'rgba(77, 168, 218, 0.3)'
              }
            }} />
          </div>
        </TestimonialCard>
      </Section>

      {/* Hobbies Section */}
      <Section id="hobbies">
        <SectionTitle variant="h4">Hobbies and Interests</SectionTitle>
        <HobbiesContainer>
          {[
            { name: "Coding", icon: <Code />, color: colors.primary, description: "Building side projects and exploring new technologies" },
            { name: "Reading", icon: <Book />, color: "#f4d03f", description: "Technical books and science fiction novels" },
            { name: "Gaming", icon: <SportsEsports />, color: "#a569bd", description: "Strategy games and indie titles" },
            { name: "Music", icon: <MusicNote />, color: "#e74c3c", description: "Playing guitar and discovering new artists" },
          ].map((hobby) => (
            <HobbyCard key={hobby.name}>
              <IconWrapper
                style={{ color: hobby.color, backgroundColor: `${hobby.color}20` }}
                aria-label={`Hobby: ${hobby.name}`}
              >
                {hobby.icon}
              </IconWrapper>
              <Typography variant="h6" style={{ fontWeight: "600" }}>{hobby.name}</Typography>
              <Typography variant="body2" color={colors.textSecondary} textAlign="center">
                {hobby.description}
              </Typography>
            </HobbyCard>
          ))}
        </HobbiesContainer>
      </Section>

      {/* Latest Articles Section */}
      <Section id="articles">
        <SectionTitle variant="h4">Latest Articles</SectionTitle>
        <SkillGrid>
          <ExperienceCard>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Getting Started with Next.js 14
            </Typography>
            <Typography
              variant="body2"
              style={{ color: colors.textSecondary, marginBottom: "1rem" }}
            >
              February 12, 2025
            </Typography>
            <Typography variant="body1">
              An introduction to the latest features of Next.js 14 and how to implement them in your projects.
            </Typography>
            <Button
              sx={{ marginTop: "1rem", textTransform: "none", color: colors.primary }}
              variant="text"
            >
              Read more
            </Button>
          </ExperienceCard>
          <ExperienceCard>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Improving Web Performance
            </Typography>
            <Typography
              variant="body2"
              style={{ color: colors.textSecondary, marginBottom: "1rem" }}
            >
              January 25, 2025
            </Typography>
            <Typography variant="body1">
              Tips and techniques for optimizing your website's performance and loading speed.
            </Typography>
            <Button
              sx={{ marginTop: "1rem", textTransform: "none", color: colors.primary }}
              variant="text"
            >
              Read more
            </Button>
          </ExperienceCard>
        </SkillGrid>
      </Section>

      {/* Connect With Me Section */}
      <Section id="connect">
        <SectionTitle variant="h4">Let's Connect</SectionTitle>
        <Typography variant="body1" style={{ marginBottom: "2rem" }}>
          I'm always open to new opportunities, collaborations, or just a friendly chat about web development.
        </Typography>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <SocialButton 
            variant="contained" 
            startIcon={<GitHub />} 
            aria-label="GitHub profile"
            hovercolor="#333"
          >
            GitHub
          </SocialButton>
          <SocialButton 
            variant="contained" 
            startIcon={<LinkedIn />} 
            aria-label="LinkedIn profile"
            hovercolor="#0077b5"
          >
            LinkedIn
          </SocialButton>
          <SocialButton 
            variant="contained" 
            startIcon={<Twitter />} 
            aria-label="Twitter profile"
            hovercolor="#1da1f2"
          >
            Twitter
          </SocialButton>
          <StyledButton variant="contained" aria-label="Email me">
            Email Me
          </StyledButton>
        </div>
      </Section>
    </Container>
  );
}

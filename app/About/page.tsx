"use client";
import { Typography, Button, IconButton } from "@mui/material";
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
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

// Emotion Styles
const Container = styled.div`
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const HeroImage = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 768px) {
    width: 14rem;
    height: 14rem;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #4da8da, #1e90ff, #4da8da);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
`;

const IconWrapper = styled(IconButton)`
  color: #4da8da;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: #1e90ff;
  }
`;

const HobbiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const HobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #1e90ff, #4da8da);
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1c86ee, #4da8da);
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }
`;

export default function About() {
  return (
    <Container>
      {/* Hero Section */}
      <Section>
        <HeroContainer>
          <div>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: "3rem", fontWeight: "700", mb: "1.5rem" }}
            >
              About Me
            </Typography>
            <Typography variant="body1" style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
              Hi Ayoub! It’s great to meet you! 🌟 Your passion for web development shines through. Building modern, responsive, and user-friendly applications is such a vital skill in today’s digital world. Plus, using React, Next.js, Tailwind CSS, and Material UI gives you a solid tech stack to create amazing projects.
            </Typography>
            <StyledButton variant="contained" aria-label="Connect with me">
              Connect with me
            </StyledButton>
          </div>
          <HeroImage src="/ayoub.webp" alt="Profile Picture of [Your Name]" />
        </HeroContainer>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle variant="h4">Skills and Expertise</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            { name: "React", icon: <IntegrationInstructions /> },
            { name: "Next.js", icon: <Code /> },
            { name: "Tailwind CSS", icon: <Web /> },
            { name: "Material UI", icon: <DesignServices /> },
            { name: "Git", icon: <GitHub /> },
            { name: "JavaScript", icon: <Code /> },
            { name: "Backend Development", icon: <Storage /> },
            { name: "UI/UX Design", icon: <Build /> },
          ].map((skill) => (
            <SkillCard key={skill.name}>
              <IconWrapper aria-label={`Skill: ${skill.name}`}>
                {skill.icon}
              </IconWrapper>
              <Typography variant="body1">{skill.name}</Typography>
            </SkillCard>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle variant="h4">Experience</SectionTitle>
        <SkillCard>
          <div>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Freelance Developer
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#999", marginBottom: "0.5rem" }}
            >
              January 2022 - Present
            </Typography>
            <Typography variant="body1">
              Built multiple client projects, focusing on responsive design and
              modern frameworks.
            </Typography>
          </div>
        </SkillCard>
      </Section>

      {/* Hobbies Section */}
      <Section>
        <SectionTitle variant="h4">Hobbies and Interests</SectionTitle>
        <HobbiesContainer>
          {[
            { name: "Coding", icon: <Code />, color: "#4da8da" },
            { name: "Reading", icon: <Book />, color: "#f4d03f" },
            { name: "Gaming", icon: <SportsEsports />, color: "#a569bd" },
            { name: "Music", icon: <MusicNote />, color: "#e74c3c" },
          ].map((hobby) => (
            <HobbyCard key={hobby.name}>
              <IconWrapper
                style={{ color: hobby.color }}
                aria-label={`Hobby: ${hobby.name}`}
              >
                {hobby.icon}
              </IconWrapper>
              <Typography variant="body1">{hobby.name}</Typography>
            </HobbyCard>
          ))}
        </HobbiesContainer>
      </Section>
    </Container>
  );
}

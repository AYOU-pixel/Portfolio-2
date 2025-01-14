"use client"
import styled from "@emotion/styled";
// Styled Components
const Section = styled.section`
  position: relative;
  background: #121212;
  color: #ffffff;
  padding: 4rem 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #4f46e5, #7c3aed, transparent);
  opacity: 0.2;
  filter: blur(60px);
  z-index: 0;
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  color: #9ca3af;
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const Form = styled.form`
  background: #1f1f1f;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid #2d2d2d;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;

  label {
    display: block;
    font-size: 0.875rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    background: #2d2d2d;
    color: #ffffff;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: #6b7280;
    }
  }

  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default function Contact() {
  return (
    <Section id="contact">
      {/* Background Glow */}
      <BackgroundGlow />

      <Container>
        {/* Section Header */}
        <Title>Get in Touch</Title>
        <Subtitle>
          I’d love to hear from you! Whether it’s about a project idea, a question, or just to say hi, drop me a
          message below, and I’ll get back to you as soon as I can.
        </Subtitle>

        {/* Contact Form */}
        <Form method="POST" action="/api/contact">
          {/* Name Field */}
          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </FormGroup>

          {/* Email Field */}
          <FormGroup>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </FormGroup>

          {/* Message Field */}
          <FormGroup>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Write your message..." required></textarea>
          </FormGroup>

          {/* Submit Button */}
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </Section>
  );
}
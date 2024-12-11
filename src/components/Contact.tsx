import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Box, Button, Container, Heading } from '@chakra-ui/react';

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
  >
    <span className="text-indigo-600">{icon}</span>
    <span>{text}</span>
  </a>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000); // Hide success message after 5 seconds
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 relative">
      <Container maxW="container.md" centerContent>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Get In Touch
        </Heading>
        <Box maxW="4xl" mx="auto">
          {showSuccess && (
            <div
              style={{
                padding: '1rem',
                marginBottom: '1rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
                borderRadius: '4px',
              }}
            >
              <strong>Success!</strong> Your message has been sent successfully. I'll get back to you soon!
            </div>
          )}
          <Box display={{ base: 'block', md: 'grid' }} gridTemplateColumns={{ md: '1fr 1fr' }} gap={8}>
            <Box mb={6}>
              <Heading as="h3" size="lg" mb={4}>
                Let's Connect
              </Heading>
              <p>
                Feel free to reach out for collaborations, project discussions, or just a chat. I am always open to connecting with like-minded professionals.
              </p>
              <Box mt={4}>
                <ContactInfo
                  icon={<Mail />}
                  text="kaifmohammed037@gmail.com"
                  href="mailto:kaifmohammed037@gmail.com"
                />
                <ContactInfo
                  icon={<Linkedin />}
                  text="LinkedIn Profile"
                  href="https://linkedin.com/in/mohammed-kaif"
                />
                <ContactInfo
                  icon={<Github />}
                  text="GitHub Profile"
                  href="https://github.com/mohammedkaif037"
                />
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
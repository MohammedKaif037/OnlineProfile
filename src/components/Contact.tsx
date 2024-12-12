import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Toast from './Toast'; // Adjust the import path as needed

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
  href: string;
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
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      // Show success toast
      setToastMessage('Thank you! Your message has been successfully sent.');
      setToastType('success');
      setToastVisible(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);

      // Show error toast
      setToastMessage('Sorry, there was a problem submitting your message. Please try again.');
      setToastType('error');
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600">
                Feel free to reach out for collaborations, project discussions, or just a chat.
              </p>
              <div className="space-y-4">
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
              </div>
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Component */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  );
};

export default Contact;

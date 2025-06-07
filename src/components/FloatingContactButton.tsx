import React, { useState } from 'react';
import { FiMessageSquare, FiX, FiSend, FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// TODO: Replace with actual environment variables
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message: string } | null>(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSubmitStatus(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Your Name' // Or your website name
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! It has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Close form after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={toggleForm}
          className={`w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center motion-reduce:transform-none ${
            isOpen ? 'transform rotate-45' : ''
          }`}
          aria-label={isOpen ? 'Close contact form' : 'Open contact form'}
          aria-expanded={isOpen}
          aria-controls="contact-form-container"
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMessageSquare className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="contact-form-container"
          className="fixed bottom-24 right-6 left-6 sm:left-auto sm:w-80 z-40 bg-background rounded-lg shadow-xl overflow-hidden transition-all duration-300 motion-reduce:transition-none"
          role="region"
          aria-labelledby="contact-form-header"
        >
          <div className="p-4 bg-primary text-white">
            <h3 id="contact-form-header" className="text-lg font-semibold">Get in Touch</h3>
            <p className="text-sm opacity-90">We'd love to hear from you!</p>
          </div>
          
          <div className="p-4">
            {submitStatus ? (
              <div className={`p-4 rounded-md ${
                submitStatus.success ? 'bg-accent/10 text-accent' : 'bg-red-500/10 text-red-500'
              }`}>
                {submitStatus.message}
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); void handleSubmit(e); }} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-text/50" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    aria-label="Your Name"
                    className="block w-full pl-10 pr-3 py-2 border border-accent/30 rounded-md bg-accent/5 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-text/50" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    aria-label="Your Email"
                    className="block w-full pl-10 pr-3 py-2 border border-accent/30 rounded-md bg-accent/5 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <FiMessageCircle className="h-5 w-5 text-text/50" aria-hidden="true" />
                  </div>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message"
                    aria-label="Your Message"
                    className="block w-full pl-10 pr-3 py-2 border border-accent/30 rounded-md bg-accent/5 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;
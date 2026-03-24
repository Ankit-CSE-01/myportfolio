import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { email, phone, location } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Get In Touch</SectionHeading>
        <p className="text-center text-light-muted dark:text-dark-muted mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Card className="md:col-span-2 space-y-8 h-full">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0"><Mail size={24} /></div>
              <div>
                <p className="text-sm text-light-muted dark:text-dark-muted mb-1">Email</p>
                <a href={`mailto:${email}`} className="font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors pr-2 break-all">{email}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0"><Phone size={24} /></div>
              <div>
                <p className="text-sm text-light-muted dark:text-dark-muted mb-1">Phone</p>
                <a href={`tel:${phone}`} className="font-medium text-light-text dark:text-dark-text hover:text-secondary transition-colors">{phone}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl shrink-0"><MapPin size={24} /></div>
              <div>
                <p className="text-sm text-light-muted dark:text-dark-muted mb-1">Location</p>
                <p className="font-medium text-light-text dark:text-dark-text">{location}</p>
              </div>
            </div>
          </Card>

          <Card className="md:col-span-3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-light-text dark:text-dark-text" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-light-text dark:text-dark-text" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-light-text dark:text-dark-text" placeholder="Project Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-muted/20 dark:border-dark-muted/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-light-text dark:text-dark-text resize-none" placeholder="Your message here..."></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full md:w-auto flex items-center justify-center gap-2 px-8">
                Send Message <Send size={18} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

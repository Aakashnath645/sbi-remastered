
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Personal Banking',
      links: [
        { name: 'Savings Account', path: '/personal-banking/savings' },
        { name: 'Current Account', path: '/personal-banking/current' },
        { name: 'Fixed Deposits', path: '/personal-banking/fixed-deposits' },
        { name: 'Recurring Deposits', path: '/personal-banking/recurring-deposits' },
      ],
    },
    {
      title: 'Loans',
      links: [
        { name: 'Home Loan', path: '/loans/home-loan' },
        { name: 'Car Loan', path: '/loans/car-loan' },
        { name: 'Education Loan', path: '/loans/education-loan' },
        { name: 'Personal Loan', path: '/loans/personal-loan' },
      ],
    },
    {
      title: 'Cards',
      links: [
        { name: 'Credit Cards', path: '/cards/credit' },
        { name: 'Debit Cards', path: '/cards/debit' },
        { name: 'Prepaid Cards', path: '/cards/prepaid' },
        { name: 'Commercial Cards', path: '/cards/commercial' },
      ],
    },
    {
      title: 'About SBI',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Investor Relations', path: '/investor-relations' },
        { name: 'CSR Activities', path: '/csr' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and contact information */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center">
                <span className="text-xl font-bold text-sbi-blue">SBI</span>
                <span className="ml-1 text-sm font-medium text-gray-600">State Bank of India</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-4 text-sm">
              India's largest banking and financial services company, providing a wide range of banking products and services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">1800 1234 (Toll Free)</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contactus@sbi.co.in</span>
              </div>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-sm">State Bank Bhavan, Madame Cama Road, Mumbai - 400021</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-sbi-blue text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media and bottom section */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-500 hover:text-sbi-blue transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sbi-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sbi-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sbi-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              <p>© {currentYear} State Bank of India. All rights reserved.</p>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="hover:text-sbi-blue">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-sbi-blue">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-sbi-blue">Cookie Policy</Link>
              <Link to="/sitemap" className="hover:text-sbi-blue">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

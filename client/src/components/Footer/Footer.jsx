import React from 'react';
import './footer.css';

const Footer = () => {
  const footerLinks = ['Company', 'Products', 'Offices', 'About', 'Contact'];
  const socialIcons = [
    { name: 'Instagram', path: '/assets/instagram_icon.png' },
    { name: 'Pinterest', path: '/assets/pinterest_icon.png' }, // Corrected typo
    { name: 'WhatsApp', path: '/assets/whatsapp_icon.png' },
  ];

  return (
    <footer className="footer-joyful">
      <div className="footer-joyful-container">
        <div className="footer-about">
          <div className="footer-logo-joyful">
            <img src="/assets/logo_big.png" alt="Shopper Logo" />
            <p>SHOPPER</p>
          </div>
          <p>Your one-stop shop for the latest trends in fashion. Discover joy in every purchase.</p>
        </div>

        <div className="footer-links-column">
          <h3>Quick Links</h3>
          <ul className="footer-links-joyful">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#!">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-socials-column">
          <h3>Follow Us</h3>
          <div className="footer-social-icons-joyful">
            {socialIcons.map((social) => (
              <a href="#!" key={social.name} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                <img src={social.path} alt={`${social.name} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-copyright-joyful">
        <p>&copy; {new Date().getFullYear()} SHOPPER. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
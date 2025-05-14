import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-4">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
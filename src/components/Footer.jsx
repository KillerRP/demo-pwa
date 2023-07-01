import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center">
      <p className="copywrite">
        © {currentYear} University of Kansas. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer
        // className={`py-6 ${
        //   darkMode ? "bg-gray-800" : "bg-gray-200"
        // }`}

        className="py-6 bg-gradient-to-b from-black to-slate-900"
      >
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

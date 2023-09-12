import React from "react";

const Footer = ({ footerItems }) => {
  return (
    <div className="footer">
      {footerItems.map((section, index) => (
        <div key={index}>
          <h4>{section.title}</h4>
          <ul>
            {section.children.map((child, childIndex) => (
              <li key={childIndex}>
                {/* Check if the child is a social media link or regular link */}
                {child.icon ? (
                  <a
                    href={child.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {child.icon}
                  </a>
                ) : (
                  <a href="#">{child}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;

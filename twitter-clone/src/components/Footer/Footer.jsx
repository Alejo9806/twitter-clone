import React from "react";
import '../../styles/footer.css';

const Footer = () => {
  return (
    <nav className="footer">
      <div className="links">
          <a href="">Terms of Service</a>{" "}
          <a href="">Privacy Policy</a>{" "}
          <a href="">Cookie Policy</a>{" "}
          <a href="">Accessibility</a>{" "}
          <a href="">Ads info</a>
          <a href="">
            {" "}
            <span>More <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="iconFooter"
            >
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
            </span> {" "}
            
          </a>
      </div>
      <div>
        <span className="copy">© 2022 Twitter, Inc.</span>
      </div>
    </nav>
  );
};

export default Footer;

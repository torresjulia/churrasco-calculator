import styled from "styled-components";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Churrasco Calculator. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import styled from "styled-components";
import InstagramIcon from "../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a> */}
          <a
            href="https://hotm.art/saborechama"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔥 Receitas de Molhos 🔥
          </a>

          <a
            href="https://www.instagram.com/churrasco.maneiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Churrasco Maneiro. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

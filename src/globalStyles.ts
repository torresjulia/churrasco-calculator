import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #000;
    color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .calculator-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    background-color: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    touch-action: none;
    
      .header-container {
        background: #ff5733;
        color: white;
        text-align: center;
        padding: 15px;
        font-size: 24px;
        font-weight: bold;
        border-radius: 25px;
      }
    
      .calculator-form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 18px;
          }
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: space-between;
        }
    
        .form__input {
          padding: 10px;
          border: none;
          border-radius: 5px;
        }
      }
    
      .result-container {
        padding: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        max-width: 400px;
        margin: 0 auto;
        background: orange;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        
        p {
          margin: 10px 0;
          display: flex;
          align-items: center;
          justify-content: unset;
          gap: 10px;
        }
      }
    
      .footer-container {
        width: 100%;
        padding: 2rem 1rem;
        background-color: #1a1a1a;
        margin-top: auto;
    
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
    
          .social-links {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;
    
            a {
              color: #f5f5f5;
              text-decoration: none;
              transition: color 0.3s ease;
    
              &:hover {
                color: #ff6b6b;
              }
            }
          }
    
          .copyright {
            color: #888;
            font-size: 0.9rem;
            text-align: center;
          }
        }
      }
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;

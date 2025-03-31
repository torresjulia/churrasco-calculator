import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Poppins:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #1a1a1a;
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
            flex-direction: column;
            align-items: center;
    
            a {
              color: #f5f5f5;
              text-decoration: none;
              transition: color 0.3s ease;
    
              &:hover {
                color: orange;
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

// Result
export const ResultContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1.2rem;
  background-color: #2a2a2a;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ff6b6b;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;

export const ResultTitle = styled.h2`
  font-family: "Righteous", cursive;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ResultItem = styled.p`
  color: #f5f5f5;
  font-size: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff6b6b;
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

// CalculatorForm
// export const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   width: 100%;
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 1.2rem;
//   background-color: #2a2a2a;
//   border-radius: 12px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   border: 1px solid #ff6b6b;
// `;

// export const Title = styled.h1`
//   font-family: "Righteous", cursive;
//   color: #ff6b6b;
//   text-align: center;
//   margin-bottom: 1rem;
//   font-size: 2rem;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

//   @media (max-width: 480px) {
//     font-size: 1.8rem;
//   }
// `;

// export const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;
// `;

// export const Label = styled.label`
//   color: #f5f5f5;
//   font-weight: 500;
//   font-size: 0.9rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// export const Input = styled.input`
//   padding: 0.8rem;
//   border: 2px solid #3a3a3a;
//   border-radius: 8px;
//   background-color: #1a1a1a;
//   color: #f5f5f5;
//   font-size: 1rem;
//   transition: all 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #ff6b6b;
//     box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
//   }

//   &[type="number"] {
//     -moz-appearance: textfield;
//     &::-webkit-outer-spin-button,
//     &::-webkit-inner-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }
//   }

//   &[type="checkbox"] {
//     width: 1.2rem;
//     height: 1.2rem;
//     cursor: pointer;
//   }
// `;

// export const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.5rem;
//   background-color: #1a1a1a;
//   border-radius: 8px;
//   border: 2px solid #3a3a3a;
//   transition: all 0.3s ease;

//   &:hover {
//     border-color: #ff6b6b;
//   }
// `;

// export const CalculateButton = styled.button`
//   margin-top: 0.5rem;
//   padding: 1rem;
//   background-color: ${(props) => (props.disabled ? "#666" : "orange")};
//   color: white;
//   border: none;
//   border-radius: 8px;
//   font-family: "Righteous", -apple-system, BlinkMacSystemFont, "Segoe UI",
//     Roboto, sans-serif;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   transition: all 0.3s ease;
//   width: 100%;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   opacity: ${(props) => (props.disabled ? 0.7 : 1)};

//   &:hover {
//     background-color: ${(props) => (props.disabled ? "#666" : "#ff6b6b")};
//     transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
//     box-shadow: ${(props) =>
//       props.disabled ? "none" : "0 4px 8px rgba(255, 107, 107, 0.3)"};
//   }

//   &:active {
//     transform: translateY(0);
//   }

//   @media (max-width: 480px) {
//     padding: 0.8rem;
//     font-size: 1rem;
//   }
// `;

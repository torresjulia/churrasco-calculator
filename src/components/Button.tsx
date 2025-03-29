import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #ff5252;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
`;

export default Button;

import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ primary }) => (primary ? "#000" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#000")};
    color: ${({ primary }) => (primary ? "#000" : "#fff")};
  }
`;

export default Button;

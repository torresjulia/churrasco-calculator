import React from "react";
import styled from "styled-components";
import { useChurrasco } from "../context/ChurrascoContext";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1.2rem;
  background-color: #2a2a2a;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ff6b6b;
`;

const Title = styled.h1`
  font-family: "Righteous", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Label = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #3a3a3a;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: #f5f5f5;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &[type="checkbox"] {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  border: 2px solid #3a3a3a;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff6b6b;
  }
`;

const CalculateButton = styled.button<{ disabled: boolean }>`
  margin-top: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => (props.disabled ? "#666" : "orange")};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: "Righteous", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#666" : "#ff6b6b")};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0 4px 8px rgba(255, 107, 107, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  display: block;
`;

const CalculatorForm = () => {
  const {
    adultos,
    criancas,
    bebidas,
    acompanhamentos,
    setAdultos,
    setCriancas,
    setBebidas,
    setAcompanhamentos,
    setShowResult,
  } = useChurrasco();

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (adultos > 0 || criancas > 0) {
      setShowResult(true);
    }
  };

  const handleAdultosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    setAdultos(value);
    setShowResult(false);
  };

  const handleCriancasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    setCriancas(value);
    setShowResult(false);
  };

  const handleBebidasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBebidas(e.target.checked);
    setShowResult(false);
  };

  const handleAcompanhamentosChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAcompanhamentos(e.target.checked);
    setShowResult(false);
  };

  const isFormValid = adultos > 0 || criancas > 0;

  return (
    <FormContainer onSubmit={handleCalculate}>
      <Title>Calculadora de Churrasco</Title>
      <InputGroup>
        <Label>👨‍💼 Adultos</Label>
        <Input
          type="number"
          min="0"
          placeholder="0"
          value={adultos || ""}
          onChange={handleAdultosChange}
        />
        {!isFormValid && (
          <ErrorMessage>Digite pelo menos 1 adulto ou criança</ErrorMessage>
        )}
      </InputGroup>
      <InputGroup>
        <Label>👶 Crianças</Label>
        <Input
          type="number"
          min="0"
          placeholder="0"
          value={criancas || ""}
          onChange={handleCriancasChange}
        />
      </InputGroup>
      <CheckboxContainer>
        <Label>🍺 Terá bebidas?</Label>
        <Input
          type="checkbox"
          checked={bebidas}
          onChange={handleBebidasChange}
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Label>🍚 Terá acompanhamentos?</Label>
        <Input
          type="checkbox"
          checked={acompanhamentos}
          onChange={handleAcompanhamentosChange}
        />
      </CheckboxContainer>
      <CalculateButton type="submit" disabled={!isFormValid}>
        Calcular
      </CalculateButton>
    </FormContainer>
  );
};

export default CalculatorForm;

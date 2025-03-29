import React from "react";
import styled from "styled-components";
import { useChurrasco } from "../context/ChurrascoContext";
import Button from "./Button";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #f5f5f5;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CalculateButton = styled.button`
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
    setShowResult(true);
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

  return (
    <FormContainer onSubmit={handleCalculate}>
      <InputGroup>
        <Label>Adultos</Label>
        <Input
          type="number"
          min="0"
          placeholder="0"
          value={adultos || ""}
          onChange={handleAdultosChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>Crianças</Label>
        <Input
          type="number"
          min="0"
          placeholder="0"
          value={criancas || ""}
          onChange={handleCriancasChange}
        />
      </InputGroup>
      <CheckboxContainer>
        <Label>Terá bebidas?</Label>
        <Input
          type="checkbox"
          checked={bebidas}
          onChange={handleBebidasChange}
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Label>Terá acompanhamentos?</Label>
        <Input
          type="checkbox"
          checked={acompanhamentos}
          onChange={handleAcompanhamentosChange}
        />
      </CheckboxContainer>
      <Button type="submit">Calcular</Button>
    </FormContainer>
  );
};

export default CalculatorForm;

import React from "react";
import styled from "styled-components";
import { useChurrasco } from "../context/ChurrascoContext";
import {
  FormContainer,
  Title,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  CheckboxContainer,
  CalculateButton,
} from "../styles";

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

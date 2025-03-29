import React from "react";
import styled from "styled-components";
import { useChurrasco } from "../context/ChurrascoContext";

const ResultContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: 0.7rem;
    border-radius: 4px;
  }
`;

const ResultItem = styled.p`
  color: #f5f5f5;
  font-size: 0.9rem;
  margin: 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 0.3rem 0;
  }
`;

const Result = () => {
  const { calcularQuantidade, showResult } = useChurrasco();
  const { carne, cerveja, refrigerante, paoDeAlho, acompanhamentos } =
    calcularQuantidade();

  if (!showResult) return null;

  return (
    <ResultContainer>
      <ResultItem>🥩 Carne: {carne} kg</ResultItem>
      <ResultItem>🍺 Cerveja: {cerveja} L</ResultItem>
      <ResultItem>🥤 Refrigerante: {refrigerante} L</ResultItem>
      <ResultItem>🍞 Pão de alho: {paoDeAlho} unidades</ResultItem>
      <ResultItem>🍚 Acompanhamentos: {acompanhamentos} porções</ResultItem>
    </ResultContainer>
  );
};

export default Result;

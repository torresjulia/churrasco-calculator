import React from "react";
import { useChurrasco } from "../context/ChurrascoContext";
import { ResultContainer, ResultItem, ResultTitle } from "../globalStyles";

const Result = () => {
  const { calcularQuantidade, showResult } = useChurrasco();
  const { carne, cerveja, refrigerante, paoDeAlho, acompanhamentos } =
    calcularQuantidade();

  if (!showResult) return null;

  return (
    <ResultContainer>
      <ResultTitle>Resultado do Churrasco</ResultTitle>
      <ResultItem>🥩 Carne: {carne} kg</ResultItem>
      <ResultItem>🍺 Cerveja: {cerveja} L</ResultItem>
      <ResultItem>🥤 Refrigerante: {refrigerante} L</ResultItem>
      <ResultItem>🍞 Pão de alho: {paoDeAlho} unidades</ResultItem>
      <ResultItem>🍚 Acompanhamentos: {acompanhamentos} porções</ResultItem>
    </ResultContainer>
  );
};

export default Result;

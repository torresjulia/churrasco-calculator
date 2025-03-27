import React from "react";
import { useChurrasco } from "../context/ChurrascoContext";

const Result = () => {
  const { calcularQuantidade } = useChurrasco();
  const { carne, cerveja, refrigerante, paoDeAlho, acompanhamentos } =
    calcularQuantidade();

  return (
    <div className="result-container">
      <p>🥩 Carne: {carne}g</p>
      <p>🍺 Cerveja: {cerveja}ml</p>
      <p>🥤 Refrigerante: {refrigerante}ml</p>
      <p>🍞 Pão de alho: {paoDeAlho} unidades</p>
      <p>🍚 Acompanhamentos: {acompanhamentos} porções</p>
    </div>
  );
};

export default Result;

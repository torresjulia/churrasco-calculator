import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useChurrasco } from "../context/ChurrascoContext";

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
  } = useChurrasco();

  return (
    <form className="calculator-form">
      <div>
        <span>Adultos</span>
        <input
          className="form__input"
          value={adultos}
          onChange={(e) => setAdultos(Number(e.target.value))}
        />
      </div>
      <div>
        <span>Crianças</span>
        <input
          className="form__input"
          value={criancas}
          onChange={(e) => setCriancas(Number(e.target.value))}
        />
      </div>
      <div className="checkbox-container">
        <label>Terá bebidas?</label>
        <input
          className="form__input"
          type="checkbox"
          checked={bebidas}
          onChange={(e) => setBebidas(e.target.checked)}
        />
      </div>
      <div className="checkbox-container">
        <label>Terá acompanhamentos?</label>
        <input
          className="form__input"
          type="checkbox"
          checked={acompanhamentos}
          onChange={(e) => setAcompanhamentos(e.target.checked)}
        />
      </div>
    </form>
  );
};

export default CalculatorForm;

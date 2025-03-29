import React from "react";
import Footer from "./Footer";
import CalculatorForm from "./CalculatorForm";
import Result from "./Result";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <CalculatorForm />
      <Result />
      <Footer />
    </div>
  );
};

export default Calculator;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CalculatorForm from "./CalculatorForm";
import Result from "./Result";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <Header />
      <CalculatorForm />
      <Result />
      <Footer />
    </div>
  );
};

export default Calculator;

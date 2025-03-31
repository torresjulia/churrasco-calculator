import React from "react";
import { ThemeProvider } from "styled-components";
import { ChurrascoProvider } from "./context/ChurrascoContext";
import { GlobalStyle } from "./globalStyles";
import CalculatorForm from "./components/CalculatorForm";
import Result from "./components/Result";
import Footer from "./components/Footer";
import ClarityAnalytics from "./infrastructure/ClarityAnalytics";
import { CLARITY_PROJECT_ID } from "./config/analytics";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <ChurrascoProvider>
        <GlobalStyle />
        <ClarityAnalytics projectId={CLARITY_PROJECT_ID} />
        <CalculatorForm />
        <Result />
        <Footer />
      </ChurrascoProvider>
    </ThemeProvider>
  );
}

export default App;

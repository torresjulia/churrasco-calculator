import React from "react";
import { ChurrascoProvider } from "./context/ChurrascoContext";
import { GlobalStyle } from "./styles";
import ClarityAnalytics from "./infrastructure/ClarityAnalytics";
import { CLARITY_PROJECT_ID } from "./config/analytics";
import Calculator from "./components/Calculator";

function App() {
  return (
    <ChurrascoProvider>
      <GlobalStyle />
      <ClarityAnalytics projectId={CLARITY_PROJECT_ID} />
      <Calculator />
    </ChurrascoProvider>
  );
}

export default App;

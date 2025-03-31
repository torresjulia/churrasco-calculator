import React from "react";
import ClarityAnalytics from "./components/ClarityAnalytics";
import { CLARITY_PROJECT_ID } from "./config/analytics";
import { ChurrascoProvider } from "./context/ChurrascoContext";
import GlobalStyle from "./globalStyles";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <ChurrascoProvider>
      <ClarityAnalytics projectId={CLARITY_PROJECT_ID} />
      <GlobalStyle />
      <Calculator />
    </ChurrascoProvider>
  );
};

export default App;

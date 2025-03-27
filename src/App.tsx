import React from "react";
import GlobalStyle from "./globalStyles";
import Calculator from "./components/Calculator";
import { ChurrascoProvider } from "./context/ChurrascoContext";

const App: React.FC = () => {
  return (
    <ChurrascoProvider>
      <GlobalStyle />
      <Calculator />
    </ChurrascoProvider>
  );
};

export default App;

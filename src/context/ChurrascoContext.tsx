import React, { createContext, useState, ReactNode, useContext } from "react";

// Definição do tipo de dados do contexto
interface ChurrascoContextType {
  adultos: number;
  criancas: number;
  bebidas: boolean;
  acompanhamentos: boolean;
  showResult: boolean;
  setAdultos: (value: number) => void;
  setCriancas: (value: number) => void;
  setBebidas: (value: boolean) => void;
  setAcompanhamentos: (value: boolean) => void;
  setShowResult: (value: boolean) => void;
  calcularQuantidade: () => {
    carne: number;
    cerveja: number;
    refrigerante: number;
    paoDeAlho: number;
    acompanhamentos: number;
  };
}

// Criando o contexto
const ChurrascoContext = createContext<ChurrascoContextType | undefined>(
  undefined
);

// Criando o provider
export const ChurrascoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [adultos, setAdultos] = useState<number>(0);
  const [criancas, setCriancas] = useState<number>(0);
  const [bebidas, setBebidas] = useState<boolean>(false);
  const [acompanhamentos, setAcompanhamentos] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Função para calcular as quantidades necessárias
  const calcularQuantidade = () => {
    const carneEmGramas = adultos * 400 + criancas * 200;
    const cervejaEmMl = bebidas ? adultos * 2000 : 0;
    const refrigeranteEmMl = criancas * 1000;
    const paoDeAlho = adultos * 3;
    const porcoesAcompanhamentos = acompanhamentos ? adultos + criancas : 0;

    // Convertendo para unidades mais amigáveis
    const carne = carneEmGramas / 1000;
    const cerveja = cervejaEmMl / 1000;
    const refrigerante = refrigeranteEmMl / 1000;

    return {
      carne: Number(carne.toFixed(2)),
      cerveja: Number(cerveja.toFixed(2)),
      refrigerante: Number(refrigerante.toFixed(2)),
      paoDeAlho,
      acompanhamentos: porcoesAcompanhamentos,
    };
  };

  return (
    <ChurrascoContext.Provider
      value={{
        adultos,
        criancas,
        bebidas,
        acompanhamentos,
        showResult,
        setAdultos,
        setCriancas,
        setBebidas,
        setAcompanhamentos,
        setShowResult,
        calcularQuantidade,
      }}
    >
      {children}
    </ChurrascoContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useChurrasco = () => {
  const context = useContext(ChurrascoContext);
  if (!context) {
    throw new Error(
      "useChurrasco deve ser usado dentro de um ChurrascoProvider"
    );
  }
  return context;
};

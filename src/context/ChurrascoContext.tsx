import React, { createContext, useState, ReactNode, useContext } from "react";

// Definição do tipo de dados do contexto
interface ChurrascoContextType {
  adultos: number;
  criancas: number;
  bebidas: boolean;
  acompanhamentos: boolean;
  setAdultos: (value: number) => void;
  setCriancas: (value: number) => void;
  setBebidas: (value: boolean) => void;
  setAcompanhamentos: (value: boolean) => void;
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

  // Função para calcular as quantidades necessárias
  const calcularQuantidade = () => {
    const carne = adultos * 400 + criancas * 200;
    const cerveja = bebidas ? adultos * 2000 : 0; // 2L por adulto que bebe
    const refrigerante = criancas * 1000; // 1L por criança
    const paoDeAlho = adultos * 3; // 3 pães por adulto
    const porcoesAcompanhamentos = acompanhamentos ? adultos + criancas : 0;

    return {
      carne,
      cerveja,
      refrigerante,
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
        setAdultos,
        setCriancas,
        setBebidas,
        setAcompanhamentos,
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

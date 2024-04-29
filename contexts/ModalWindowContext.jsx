"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const ModalWindowContext = createContext();

function ModalWindowProvider({ children }) {
  const [showModalImportant, setShowModalImportant] = useState(false);
  const [showModalFormTarif1, setShowModalFormTarif1] = useState(false);
  const [showModalFormTarif2, setShowModalFormTarif2] = useState(false);

  const contextValue = {
    showModalImportant,
    showModalFormTarif1,
    showModalFormTarif2,
    setShowModalImportant,
    setShowModalFormTarif1,
    setShowModalFormTarif2,
  };

  return (
    <ModalWindowContext.Provider value={contextValue}>
      {children}
    </ModalWindowContext.Provider>
  );
}

function useModalWidow() {
  const context = useContext(ModalWindowContext);
  if (context === undefined)
    throw new Error(
      "ModalWindowContext was used outside of the Context Provider"
    );
  return context;
}

export { ModalWindowProvider, useModalWidow };

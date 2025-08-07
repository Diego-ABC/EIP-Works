// const { createContext, useContext, useState } = require("react");
import { createContext, useContext, useState } from "react";

const CaseContext = createContext();

export function CaseProvider({ children, initialCase }) {
  const [eiCase, setEiCase] = useState(initialCase ?? null);
  return (
    <CaseContext.Provider value={{ eiCase, setEiCase }}>
      {children}
    </CaseContext.Provider>
  );
}

export const useCase = () => useContext(CaseContext);

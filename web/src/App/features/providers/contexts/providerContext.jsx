// const { createContext, useContext, useState } = require("react");
import { createContext, useContext, useState } from "react";

const ProviderContext = createContext();

export function ProviderProvider({ children, initialProvider }) {
  const [provider, setProvider] = useState(initialProvider ?? null);
  return (
    <ProviderContext.Provider value={{ provider, setProvider }}>
      {children}
    </ProviderContext.Provider>
  );
}

export const useProvider = () => useContext(ProviderContext);

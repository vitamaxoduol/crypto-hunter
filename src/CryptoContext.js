// eslint-disable-next-line
import React, { children, useContext, useEffect, useState } from "react";
import { createContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("KSH");
  const [symbol, setSymbol] = useState("KES");

  useEffect(() => {
    if (currency === "KSH") setSymbol("KES");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, setSymbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const useCryptoContext = () => {
  return useContext(Crypto);
};

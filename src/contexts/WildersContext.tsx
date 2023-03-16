import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { IWilderProps } from "../components/Wilder";

interface WildersContextProps {
  wilders: IWilderProps[];
  getWilders: () => void | Promise<void>;
}

export const WildersContext = createContext<WildersContextProps>({
  wilders: [],
  getWilders: () => {},
});

export const WildersProvider = ({ children }: PropsWithChildren) => {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  const getWilders = async () => {
    const response = await fetch("http://localhost:5000/api/wilder");
    const result = await response.json();
    return setWilders(result);
  };

  useEffect(() => {
    getWilders();
  }, [wilders.length]);

  return (
    <WildersContext.Provider value={{ wilders, getWilders }}>
      {children}
    </WildersContext.Provider>
  );
};

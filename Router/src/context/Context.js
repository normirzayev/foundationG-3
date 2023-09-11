import { createContext } from "react";
export const ContextData = createContext();

function ContextProvider({ children }) {
  let text = "hellofewfewr  world";
  return (
    <ContextData.Provider value={{ text }}>{children}</ContextData.Provider>
  );
}
export default ContextProvider;

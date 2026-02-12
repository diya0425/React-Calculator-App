import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [value, setvalue] = useState("");
  const [result, setresult] = useState("");


  const handleClick = (val) => {
    setvalue(prev => prev + val);
  };

  const handleClear = () => {
    setvalue("");
    setresult("")
  };

  const handleDelete = () => {
    setvalue(prev => prev.slice(0, -1));
  };

  const handleEqual = () => {
    const res = eval(value);
    setvalue(res);
    setresult(res)
  };
  return (
    <CalculatorContext.Provider
      value={{ value, result, handleClick, handleClear, handleDelete, handleEqual }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

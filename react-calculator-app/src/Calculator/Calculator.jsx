import { useContext } from "react";
import Button from "../Components/button.jsx";
import { CiLight, CiDark } from "react-icons/ci";
import { CalculatorContext } from "../Context/CalculatorContext.jsx";
import { ThemeContext} from "../Context/ThemeContext.jsx";


const Calculator = () => {

  const { value, result, handleClick, handleClear, handleDelete, handleEqual } = useContext(CalculatorContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} flex justify-center items-center h-screen bg-white dark:bg-black`}>

        <div className="w-80 h-130 border border-gray-400 py-2 rounded-xl flex flex-col justify-center items-center 
           bg-white  text-black dark:text-white dark:bg-gray-800  ">


          <div className="w-full h-40 px-5  ">
            <input type="text" disabled value={value} className="w-full  text-teal-700  rounded-full text-3xl px-2 text-end mt-10  dark:text-white " />
            <input type="text" disabled value={result} className="w-full  text-teal-700 font-semibold rounded-full text-4xl px-2 text-end mt-3 dark:text-white " />

          </div>

          <div className=" grid grid-flow-rows grid-cols-4 gap-5 ">
            <Button icon={darkMode ? <CiLight /> : <CiDark />} onClick={toggleDarkMode} type="operator" />
            <Button number={"%"} onClick={() => (handleClick("%"))} type={"operator"} />
            <Button number={"/"} onClick={() => (handleClick("/"))} type={"operator"} />
            <Button number={"+"} onClick={() => (handleClick("+"))} type={"operator"} />
            <Button number={7} onClick={() => (handleClick("7"))} />
            <Button number={8} onClick={() => (handleClick("8"))} />
            <Button number={9} onClick={() => (handleClick("9"))} />
            <Button number={"-"} onClick={() => (handleClick("-"))} type={"operator"} />
            <Button number={4} onClick={() => (handleClick("4"))} />
            <Button number={5} onClick={() => (handleClick("5"))} />
            <Button number={6} onClick={() => (handleClick("6"))} />
            <Button number={"*"} onClick={() => (handleClick("*"))} type={"operator"} />
            <Button number={1} onClick={() => (handleClick("1"))} />
            <Button number={2} onClick={() => (handleClick("2"))} />
            <Button number={3} onClick={() => (handleClick("3"))} />
            <Button number={"DEL"} onClick={handleDelete} type={"delete"} />
            <Button number={"."} onClick={() => (handleClick("."))} />
            <Button number={0} onClick={() => (handleClick("0"))} />
            <Button number={"AC"} onClick={handleClear} />
            <Button number={"="} onClick={handleEqual} type={"equal"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Calculator;

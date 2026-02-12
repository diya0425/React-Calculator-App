import Calculator from "./Calculator/Calculator.jsx"
import { CalculatorProvider } from "./Context/CalculatorContext.jsx"
import { ThemeProvider } from "./Context/ThemeContext.jsx"
function App() {

  return (
    <>
     <ThemeProvider>
       <CalculatorProvider> 
        <Calculator />
        </CalculatorProvider>
     </ThemeProvider>
    </>
  )
}

export default App

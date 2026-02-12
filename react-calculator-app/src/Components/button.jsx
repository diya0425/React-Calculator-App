
const Button = ({number,onClick,icon,type})=>{
   const bgColor =
    type === "operator" ? " shadow-md text-teal-500" :
    type === "equal"    ? "bg-teal-600 text-white" :
    type === "delete"   ? "text-teal-500" :  " text-black dark:text-white";
    return(
        
        <>
        <button className={`w-13 h-13 text-2xl rounded-sm flex items-center justify-center  ${bgColor}`} onClick ={onClick}>{number}{icon}</button>
        </>
    )
}
export default Button;

const Button = ({children, onClick, disabled,variant="primary"}) =>
{
     const styles = {
            "primary": "bg-blue-600 hover:bg-blue-700 text-white",
            "secondary": "bg-gray-100 hover:bg-gray-200 text-gray-900",
            "danger": "bg-red-600 hover:bg-red-700 text-white"
    }
    const baseClass = "px-4 py-2 rounded-lg font-medium transition-colors duration-200"
    return(
       
            <button
                onClick={onClick}
                disabled={disabled}
            className={`${baseClass} ${styles[variant]}`}>
                {children}
            </button>
    )
}
export default Button;
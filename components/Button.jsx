export function Button({ children, onClick, variant = 'default' }) {
    console.log(variant, "VAR");
    const baseStyles = "px-4 py-2 rounded-lg flex items-center gap-2";
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }
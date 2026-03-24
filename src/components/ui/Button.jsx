import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
    secondary: "bg-secondary text-white hover:bg-purple-600 shadow-lg shadow-purple-500/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

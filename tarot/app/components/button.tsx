
import React from 'react';

interface ButtonProps {
  name: string;
  onClick: () => void;  // Accept a generic onClick handler
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <button className="btn" onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;


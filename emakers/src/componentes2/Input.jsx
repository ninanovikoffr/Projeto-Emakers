import React from 'react';
import './Input.css';

const Input = React.forwardRef(({ placeholder, type = "text", onKeyDown }, ref) => {
  return (
    <input
      className="inputGeral"
      placeholder={placeholder}
      type={type}
      ref={ref}
      onKeyDown={onKeyDown}
    />
  );
});

export default Input;
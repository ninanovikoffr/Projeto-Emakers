import React from 'react';
import './Input.css';

const Input = React.forwardRef(({ placeholder, type = "text", onKeyDown, value, onChange }, ref) => {
  return (
    <input
      className="inputGeral"
      placeholder={placeholder}
      type={type}
      ref={ref}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
});

export default Input;
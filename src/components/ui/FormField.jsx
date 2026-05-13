import React from "react";

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid #dee2e6",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  background: "#fff",
};

/**
 * A reusable form field component with integrated error handling and styling.
 */
const FormField = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error,
  required = false 
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={`field-${name}`} className="form-label fw-semibold" style={{ fontSize: "13px" }}>
        {label}{required && " *"}
      </label>
      <input
        id={`field-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          ...inputStyle,
          borderColor: error ? "#dc3545" : "#dee2e6",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#1C7690")}
        onBlur={(e) => (e.target.style.borderColor = error ? "#dc3545" : "#dee2e6")}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default FormField;

import React from 'react'

export const FormInput = (props) => {
  
    const { label, onChange, className, type, name, value} = props;

  return (
    <div className="formInput">
      <input
        placeholder=" "
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
      <label>{label}</label>
    </div>
  )
}

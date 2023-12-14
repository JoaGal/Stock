import React from 'react'

export const InputCustom = (props) => {
  
    const { label, onChange, type, name, value} = props;

  return (
    <div className="inputCustom">
      <input
        placeholder=" "
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className='boxShadow'
      />
      <label>{label}</label>
    </div>
  )
}

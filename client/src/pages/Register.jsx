import React from 'react'
import { RegisterData } from '../components/data/RegisterData'
import { InputCustom } from '../components/InputCustom'

export const Register = () => {
  return (
    <form className='box'>
    <h1 className="textShadow">Register</h1>
    <h2 className="textShadow">To access you need to be registered</h2>
    {RegisterData.map((item, index) => (
      <InputCustom
            key={index}
            label={item.label}
            type={item.type}
            name={item.name}
      />
    ))}
    <button className="submit boxShadow">Submit</button>
  </form>
  )
}

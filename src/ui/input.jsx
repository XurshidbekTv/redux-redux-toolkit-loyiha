import React from 'react'

const Input = ({label, state, setState, type='text'}) => {
    
  return (
  <div class="form-floating">
    <input 
    type={type}
    value={state}
    onChange={e=>setState(e.target.value)}
    class="form-control" 
    id="floatingInput" 
    placeholder={label}
    />
    <label htmlFor="floatingInput">{label}</label>
  </div>
  )
}

export default Input
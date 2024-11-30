 import React from 'react'
 
 const TextArea = ({label, state, setState, height='100px'}) => {
   return (
    <div className="form-floating">
       <textarea 
       className="form-control" 
       placeholder={label}
       id="floatingTextarea"
       style={{height:height}}
       onChange={e=>setState(e.target.value)}
       ></textarea>
       <label htmlFor="floatingTextarea">{label}</label>
    </div>
   )
 }
 
 export default TextArea
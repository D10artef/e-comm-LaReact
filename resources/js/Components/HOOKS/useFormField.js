import { useState } from 'react'

export function useFormInput(initialState){
  const [fields, setValues] = useState(initialState)

  return [
    fields, 
    function (event){
      const name = event.target.name
      let value;
      if (event.target.type === "checkbox") 
        value = event.target.checked;
      else value = event.target.value;
      setValues((prev) => ({
          ...prev,
          [name]: value,
      }));
    }
  ]
}
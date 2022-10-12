import React from 'react'
import { LoadingButton } from '../../Components/FormAndButton/Button'

const Form = ({header, children, footer, handleSubmit}) => {
  return (
    <div className="overflow-hidden bg-white border-t-2 rounded shadow-xl px-10 py-8">   
      <form
        onSubmit={handleSubmit}
        >
        {header}
        {children}
        {footer}
      </form>
    </div>
  )
}

export const FormHeader = React.memo(({title = 'Welcome', description}) => {
  return (
    <header>
      <h1 className="text-2xl font-semibold text-center text-secondary">{title}</h1>
      <p className="text-center text-xs font-light mb-2 tracking-wide">{description}</p>
      <div className="w-24 mx-auto mt-4 border-b-2 border-primary" />
    </header>
  )
})

export const FormFooter = React.memo(({processing = false, buttontText, children}) => {
  return (
    <footer className='flex items-center flex-col  justify-center mt-5'>
      <LoadingButton className="btn bg-secondary hover:bg-slate-800" type="submit" loading={processing}>
        {buttontText}
      </LoadingButton>
      { children && 
        <div className="text-center text-xs text-gray-600 mt-3">
          {children}
        </div>
      }
    </footer>
  )
}, isEqual)

function isEqual(prev, next){
  if(prev.processing === next.processing && 
    prev.buttontText === next.buttontText )
    return true
  return false
}





export default Form
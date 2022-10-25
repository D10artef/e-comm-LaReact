import React from 'react'

const PageTitle = ({title}) => {
  return (
    <>
      <h1 className="text-2xl mb-1 font-light first-letter:capitalize">{title}</h1>
      <hr className="w-1/4 border border-gray-500 mb-3"/>
    </>
  )
}

export default PageTitle
import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Logo = ({textColor = 'text-primary'}) => {
  return (
    <div className={`px-4 font-semibold text-xl ${textColor}`}>
      <Link href="/" className='flex items-center justify-center before:content-["\2AD3"] before:inline-block before:text-accent'>E-commerce</Link>
    </div>
  )
}

export default React.memo(Logo)
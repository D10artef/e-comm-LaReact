import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const MemoLink = ({children, ...props}) => {
  return (
    <Link {...props}>
      {children}
    </Link>
  )
}

export default React.memo(MemoLink)
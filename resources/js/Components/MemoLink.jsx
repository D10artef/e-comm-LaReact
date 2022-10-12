import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const MemoLink = ({...props}) => {
  return (
    <Link {...props}></Link>
  )
}

export default React.memo(MemoLink)
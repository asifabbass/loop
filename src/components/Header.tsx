import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className= 'flex gap-3 p-6 bg-slate-500'>
        <Link href="\">home page</Link>
        <Link href="\address">address page</Link>
        <Link href="\contact">contact page</Link>
    </div>
  )
}

export default Header
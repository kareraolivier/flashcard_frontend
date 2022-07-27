import React from 'react'
import Link from 'next/link'

const un = () => {
  return (
    <div>
        <h1>All Cards page</h1>
        <Link  href="/">
        <button>home</button></Link>
        <Link  href="/singlecard">
        <button>single card</button></Link>
    </div>
  )
}

export default un
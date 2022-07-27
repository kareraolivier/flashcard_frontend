import React from 'react'
import Link from 'next/link'

const singlecard = () => {
  return (
    <div>
        <h1>single cards page</h1>
        <Link href="/cards">
    <button> Allcards</button>
    </Link></div>
  )
}

export default singlecard
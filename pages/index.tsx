import React from 'react'
import Link from 'next/link';

const index = () => {
  return (
    <div><h1>homepage</h1>
    <Link href="/cards">
    <button> Allcards</button>
    </Link>
    </div>
  )
}

export default index

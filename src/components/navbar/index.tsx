import React from 'react'
import Link from 'next/link';

const navbar = () => {
  return (
    <div className='flex justify-between px-4 py-3'>
      <Link href={"/"}>
        Dashboard
      </Link>
      <div>
        <Link href={"/cashflow"}>
          Cashflow
        </Link>
        <Link href={"/sign-in"}>
          Signin
        </Link>
      </div>
    </div>
  )
}

export default navbar;
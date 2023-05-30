import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <div>
      <ul className='flex items-center gap-4 px-7 text-slate-600 '>
        <Link href='/'>
        <li className='hover:border-b-4 border-blue-400 hover:text-slate-950'>Sign Up</li>
        </Link>
        <Link href='/signin'>
        <li className='hover:border-b-4 border-blue-400 hover:text-slate-950'>Sign In</li>
        </Link>
      </ul>
    </div>
  )
}

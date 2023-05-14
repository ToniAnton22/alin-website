import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/"><p className="btn btn-ghost normal-case text-xl">Home</p></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/about"> About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
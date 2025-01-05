'use client'
import { UserButton } from '@clerk/nextjs'
import { Sidebar } from 'lucide-react'
import React from 'react'

function Header({ toggleSideNav }: { toggleSideNav: () => void }) {
  
  return (
    <div className="p-3 border-b-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
        <button onClick={toggleSideNav}>
          <Sidebar />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">🔥 Donate</h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header

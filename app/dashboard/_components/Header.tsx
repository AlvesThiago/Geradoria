import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-3 border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
        <Search />
        <input type="text" placeholder='Buscar...' 
        className='outline-none'
        />
      </div>
      <div className='flex gap-2 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥 Plano Pro por apenas $3</h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
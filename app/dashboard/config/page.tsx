import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Config() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <UserProfile />
    </div>
  )
}

export default Config
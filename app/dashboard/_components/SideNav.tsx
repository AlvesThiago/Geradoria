'use client'

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const MenuList = [
        {
            name: 'Inicio',
            icon: Home,
            path:'/dashboard'
        },
        {
            name: 'Histórico',
            icon: FileClock,
            path:'/dashboard/historico'
        },
        {
            name: 'Planos',
            icon: WalletCards,
            path:'/dashboard/planos'
        },
        {
            name: 'Config',
            icon: Settings,
            path:'/dashboard/config'
        },
    ]

    const path=usePathname();
    useEffect(() =>{
        console.log(path)
    },[])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
        </div>
        <hr className='my-8' />
        <div className='mt-10'>
            {MenuList.map((menu, index) => (
                <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-cente 
                ${path==menu.path&&'bg-primary text-white'}
                `}>
                    <menu.icon />
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav
'use client'

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

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
            name: 'Apoiar',
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
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={'/LogoGe.png'} alt='logo' width={40} height={100} />
        </div>
        <hr className='my-4' />
        <div className='mt-10'>
            {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}> 
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-cente 
                    ${path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack />
        </div>
    </div>
  )
}

export default SideNav
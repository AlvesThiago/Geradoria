'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Link from 'next/link'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0)
  const [isSideNavVisible, setIsSideNavVisible] = useState<boolean>(true)

  const MenuList = [
    {
      name: 'Inicio',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'Histórico',
      icon: FileClock,
      path: '/dashboard/historico',
    },
    {
      name: 'Apoiar',
      icon: WalletCards,
      path: '/dashboard/planos',
    },
    {
      name: 'Config',
      icon: Settings,
      path: '/dashboard/config',
    },
  ]

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible)
  }

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="bg-white h-screen relative">
        {/* SideNav Desktop */}
        {isSideNavVisible && (
          <div className="md:w-64 hidden md:block fixed z-50">
            <SideNav />
          </div>
        )}

        {/* Main Content */}
        <div className={`transition-all ${isSideNavVisible ? 'md:ml-64' : 'md:ml-0'}`}>
          <Header toggleSideNav={toggleSideNav} />
          {children}
        </div>

        {/* Footer Navigation (Mobile) */}
        {!isSideNavVisible && (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-sm md:hidden z-50">
            <div className="flex justify-around p-3">
              {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                  <div className="flex flex-col items-center text-gray-700 hover:text-primary">
                    <menu.icon className="w-6 h-6" />
                    <span className="text-xs">{menu.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </TotalUsageContext.Provider>
  )
}

export default Layout

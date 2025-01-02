'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>(''); // Corrigido o nome da função

  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} /> {/* Atualizando o estado */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard
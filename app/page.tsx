import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 ">
        <div className="text-2xl font-bold">
          <Image src={'/LogoGe.png'} alt='logo' width={60} height={20}/>
        </div>
        <div className="hidden md:flex items-center space-x-6">
        <Link href={'/dashboard'}>
          <Button className="bg-indigo-900  hover:bg-indigo-500 text-white px-6 py-2 rounded-md flex items-center">
            Teste Agora 
            <ArrowRightIcon size={16}  className="ml-2"/>
          </Button>
        </Link>
        </div>
      </nav>

      {/* Hero Section with Grid Background */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }}
        />

        {/* Floating Squares */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-12 h-12 bg-cyan-400 rounded-lg transform rotate-12" />
          <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400 rounded-lg transform -rotate-12" />
          <div className="absolute bottom-32 left-40 w-12 h-12 bg-emerald-400 rounded-lg transform rotate-45" />
          <div className="absolute top-60 right-60 w-8 h-8 bg-cyan-400 rounded-lg transform -rotate-12" />
          <div className="absolute bottom-40 right-40 w-8 h-8 bg-purple-400 rounded-lg" />
          <div className="absolute top-32 left-1/2 w-8 h-8 bg-emerald-400 rounded-lg transform rotate-12" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-8">
          Gerador de conteúdo com IA
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Revolucione a criação de seu conteúdo com nosso aplicativo com tecnologia de IA, fornecendo texto envolvente e de alta qualidade em segundos.
          </p>
          <Link href={'/dashboard'}>
            <button className="bg-indigo-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-800 transition-colors">
              Teste Agora ➡
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


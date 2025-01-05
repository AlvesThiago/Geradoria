import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircle, Zap, Sparkles } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface FeatureBoxProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 mb-4 mx-auto">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-lg font-semibold text-indigo-900 text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  )
}



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <Image src={'/LogoGe.png'} alt='logo' width={60} height={20}/>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href={'/dashboard'}>
            <Button className="bg-indigo-900 hover:bg-indigo-500 text-white px-6 py-2 rounded-md flex items-center">
              Teste Gratis
              <ArrowRightIcon size={16} className="ml-2"/>
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
            <Button className="bg-indigo-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-800 transition-colors">
              Teste Gratis <ArrowRightIcon size={20} className="ml-2"/>
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
            Recursos Poderosos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-12 h-12 text-indigo-600" />}
              title="Geração Rápida"
              description="Crie conteúdo de alta qualidade em questão de segundos, economizando horas de trabalho."
            />
            <FeatureCard 
              icon={<Sparkles className="w-12 h-12 text-indigo-600" />}
              title="IA Avançada"
              description="Utilize algoritmos de IA de ponta para gerar conteúdo relevante e envolvente."
            />
            <FeatureCard 
              icon={<CheckCircle className="w-12 h-12 text-indigo-600" />}
              title="Personalização"
              description="Adapte o conteúdo ao seu tom de voz e estilo específico da marca."
            />
          </div>
        </div>
      </section>



      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore nossa variedade de ferramentas de IA para criar conteúdo excepcional
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureBox
              icon="/TitleBlog.png"
              title="Títulos de Blogs"
              description="Gere títulos envolventes para seus posts com base nas informações do seu blog."
            />
            <FeatureBox
              icon="/ContentBlog.png"
              title="Conteúdo do Blog"
              description="Crie conteúdo completo e otimizado para SEO com nossa IA avançada."
            />
            <FeatureBox
              icon="/ExplicaCod.png"
              title="Explicar Código"
              description="Modelo de IA para explicar código de programação em qualquer linguagem."
            />
            <FeatureBox
              icon="/Erro.png"
              title="Detector de Erros"
              description="Esta ferramenta analisa entradas, como mensagens de erro e trechos de código, para identificar e corrigir erros."
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center p-4 bg-indigo-50 rounded-lg">
              <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
              <span className="text-indigo-900">
                Mais de 10 ferramentas diferentes para otimizar sua criação de conteúdo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 mb-64">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-600 text-lg mb-6">
              "Este gerador de conteúdo com IA transformou completamente nossa estratégia de marketing. Agora podemos criar conteúdo de alta qualidade em uma fração do tempo que costumávamos gastar. É uma ferramenta indispensável para nossa equipe."
            </p>
            <div className="flex items-center">
              <Image src="/User.png" alt="Cliente" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold text-indigo-900">Maria Silva</p>
                <p className="text-gray-500">Gerente de Marketing, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
              <p className="text-indigo-200">
                Soluções de IA para geração de conteúdo, ajudando empresas a criar conteúdo excepcional de forma eficiente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="/dashboard" className="text-indigo-200 hover:text-white transition-colors">Teste Gratis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="text-indigo-200">Email: contato@exemplo.com</p>
              <p className="text-indigo-200">Telefone: (11) 1234-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-800 text-center">
            <p className="text-indigo-200">&copy; 2025 Gerador de Conteúdo IA. Todos os direitos reservados.</p>
            <p className="text-indigo-200">Desenvolvido por <a href="https://www.linkedin.com/in/thiagoaalves/" target="_blank" className="text-white">@Thiago Alves</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}


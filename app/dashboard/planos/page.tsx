import React from 'react'

function Planos() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-screen-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Apoie o Desenvolvimento! 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Estamos constantemente trabalhando para melhorar nosso sistema. Sua contribuição é fundamental para nos ajudar a continuar
          o desenvolvimento e trazer novas funcionalidades. Qualquer valor será muito bem-vindo!
        </p>

        <p className="text-md md:text-lg text-gray-500 mb-8">
          Se você acredita no nosso trabalho, considere fazer uma doação. Ela nos permite continuar evoluindo e oferecendo um serviço de qualidade.
        </p>

        <button
          className="py-3 px-6 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition duration-300 w-full md:w-auto"
        >
          Fazer uma Doação
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Ao clicar no botão, você será redirecionado para a plataforma de pagamento.
        </p>
      </div>
    </div>
  )
}

export default Planos
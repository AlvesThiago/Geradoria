# GeradorIa 🖥️

O **GeradorIa** é uma plataforma inovadora que integra diversos programas de inteligência artificial para oferecer soluções práticas e eficientes em múltiplos tópicos. Desenvolvido com foco na otimização da interação com os usuários, o sistema é intuitivo, seguro e repleto de funcionalidades úteis.

## Funcionalidades

- **Landing Page Intuitiva e Funcional**: Projetada para proporcionar uma excelente experiência ao usuário.
- **Autenticação Segura com Clerk**: Garante que todas as interações sejam protegidas e seguras.
- **Dashboard para Usuários**: Permite o gerenciamento fácil das interações, visualizando e controlando atividades de forma simples.
- **Histórico de Respostas**: Acesso rápido a respostas passadas para facilitar consultas futuras.
- **Sistema de Donate**: Incentiva a continuidade do projeto, permitindo doações para seu crescimento e manutenção.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces interativas.
- **Next.js**: Framework React para renderização no lado do servidor e otimização de desempenho.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, tornando o código mais seguro e fácil de manter.
- **Tailwind CSS**: Framework de CSS utilitário para um design flexível e responsivo.
- **Shadcn/UI**: Conjunto de componentes de UI para uma experiência de usuário moderna.
- **Editor TOAST UI**: Editor de texto WYSIWYG para uma experiência de escrita rica e personalizada.
- **Clerk**: Sistema de autenticação para controle de acesso seguro aos usuários.
- **Neon**: Banco de dados moderno e rápido para armazenar dados com alta performance.
- **API Gemini**: Integração com a poderosa API de Inteligência Artificial Gemini.
- **Drizzle ORM**: Framework ORM para facilitar a interação com o banco de dados de forma eficiente.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o **GeradorIa** em sua máquina local.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Conta no [Clerk](https://clerk.dev/) para autenticação
- Conta no [Neon](https://neon.tech/) para banco de dados
- Chave de API do [Gemini](https://gemini.com/)

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/geradoria.git
   cd geradoria
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=sua_chave_publica_do_clerk
   CLERK_SECRET_KEY=sua_chave_secreta_do_clerk
   DATABASE_URL=sua_url_do_banco_de_dados_neon
   GEMINI_API_KEY=sua_chave_da_api_gemini
   ```

4. **Execute as migrações do banco de dados**:
   ```bash
   npx drizzle-kit push:pg
   ```

5. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. **Acesse o projeto**:
   Abra o navegador e acesse `http://localhost:3000`.

## Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Envie as alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no repositório original.

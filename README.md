# Everton Cerbelo - Ademicon Landing Page

Este projeto é uma landing page moderna, persuasiva e otimizada para SEO, desenvolvida para Everton Cerbelo, Consultor Financeiro licenciado Ademicon.

## Tecnologias Utilizadas

- **Next.js (App Router)** - Framework React otimizado para performance e SEO.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Framer Motion** - Biblioteca de animações suaves e de alto desempenho.
- **Lucide React** - Ícones modernos e customizáveis.

## Instalação e Execução Local

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Abra o terminal no diretório do projeto (`c:\Users\Bomba\.gemini\antigravity\scratch\ademicon`).
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Substituição de Imagens (Atenção)

A página utiliza nomes genéricos para as fotos fornecidas no briefing. Para exibir corretamente as imagens na página:
1. Adicione a foto principal do Everton na pasta `public/` com o nome `everton-hero.jpg`.
2. Adicione a foto secundária na pasta `public/` com o nome `image_3.png` (usada na seção "Conheça Everton").
3. Adicione a imagem conceitual na pasta `public/` com o nome `image_2.png` (usada na seção de Solução).

Você pode substituir esses arquivos pelas imagens exatas do Everton e apenas se certificar de que os nomes correspondem ou alterá-los diretamente no código em `src/app/page.tsx`.

## Deploy na Vercel

O projeto está pronto para ser hospedado na Vercel.

1. Faça o commit e envie seu projeto para um repositório no GitHub.
2. Acesse a [Vercel](https://vercel.com/) e crie uma conta ou faça login.
3. Clique em **Add New...** > **Project**.
4. Importe o repositório do GitHub contendo este código.
5. A Vercel detectará automaticamente as configurações do Next.js.
6. Clique em **Deploy**.
7. Pronto! Sua landing page estará online em alguns segundos com um link otimizado.

## Detalhes de SEO

A página está configurada no `src/app/layout.tsx` com:
- **Title**: Invista com estratégia através do consórcio Ademicon com Everton Cerbelo
- **Meta Description**: Planeje seus investimentos com Everton Cerbelo, consultor financeiro licenciado Ademicon. Simule consórcio para imóvel, veículo, patrimônio e objetivos financeiros de curto, médio e longo prazo.
- Hierarquia semântica correta (`h1`, `h2`, `h3`).

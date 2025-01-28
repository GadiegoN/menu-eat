# MenuEat

Esse projeto é uma plataforma para criar cardápios online utilizando QR Code. Desenvolvido com Next.js, Firebase, TypeScript e Tailwind CSS.

## Requisitos

- Node.js (>= v16)
- Firebase

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd qr-menu-creator
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` com as variáveis de ambiente do Firebase:

   ```ts
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key;
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain;
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id;
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket;
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id;
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id;
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id;
   ```
   Substitua as variáveis `your-*` com as informações da sua conta Firebase.

4. Rode o projeto:
   ```bash
   npm run dev
   ```

Agora o projeto estará disponível no `http://localhost:3000`.

## Tecnologias

- Next.js (App Router)
- Firebase (Autenticação e Firestore)
- Tailwind CSS
- TypeScript

## Estrutura do Projeto

- `src/` - Diretório principal do código-fonte
  - `app/` - Contém arquivos de configuração e layout
  - `components/` - Componentes reutilizáveis
  - `pages/` - Páginas do Next.js
  - `services/` - Configuração e integração com Firebase
    - `firebase-config.ts` - Configuração do Firebase

## Scripts
- `npm run dev`: Inicia o servidor de desenvolvimento (disponível em http://localhost:3000).
- `npm run build`: Cria a versão otimizada para produção.
- `npm run start`: Executa a versão de produção do seu app.
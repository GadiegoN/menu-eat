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
   NEXT_PUBLIC_FIREBASE_API_KEY = your - api - key;
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = your - auth - domain;
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = your - project - id;
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = your - storage - bucket;
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = your - messaging - sender - id;
   NEXT_PUBLIC_FIREBASE_APP_ID = your - app - id;
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = your - measurement - id;
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

## Funcionalidades Implementadas

- [x] **Estrutura do Dashboard:**

  - Exibição do nome e email do usuário logado no cabeçalho.
  - Exibição de foto ou iniciais do email do usuário logado.
  - Botão de logout exibido ao clicar nas informações do usuário.

- [x] **Criação de Cardápio:**

  - Formulário de criação de cardápio.
  - Validação para garantir que o nome do cardápio seja preenchido.
  - Redirecionamento para o Dashboard após a criação do cardápio.

- [x] **Listagem de Cardápios no Dashboard:**

  - Exibição dos cardápios criados pelo usuário logado.
  - Botão de "Ver Cardápio" para visualizar detalhes do cardápio.

- [x] **Função `addMenu`:**

  - Função para adicionar um novo cardápio ao Firebase associando ao usuário logado.

- [x] **Correção de Problemas no Banco de Dados:**

  - Remoção dos cardápios criados antes da atualização, para garantir que apenas os novos cardápios apareçam na listagem.

- [x] **Página de Detalhes do Cardápio:**
  - Implementada a visualização dos detalhes de um cardápio selecionado no Dashboard, com o nome e a descrição do cardápio.

## Próximos Passos

- [ ] **Editar Cardápio:**

  - Implementar a funcionalidade de editar um cardápio existente.
  - Adicionar um botão de "Editar" ao lado de cada cardápio na listagem do Dashboard.

- [ ] **Upload de Imagens para o Cardápio (Futuro):**

  - Adicionar a funcionalidade de fazer upload de imagens para os cardápios (como uma capa ou imagens dos itens do menu).

- [ ] **Refinar UI/UX:**

  - Melhorar a interface de usuário, garantindo que seja mais intuitiva e responsiva.
  - Adicionar feedback visual para ações, como sucesso ou erro nas interações.

- [ ] **Testar Funcionalidades e Validar:**
  - Realizar testes para garantir que todas as funcionalidades estejam funcionando corretamente.
  - Validar todos os fluxos de criação, edição e visualização dos cardápios.

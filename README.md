# AI Video Creator

Plataforma modular para criação de vídeos com IA. O projeto é um monorepo com frontend React/Vite e backend Node/TypeScript, providers abstratos, fila de jobs, storage local, SQLite e renderização FFmpeg.

## Requisitos
- Node.js 20+
- npm 10+
- FFmpeg instalado e disponível no PATH

## Desenvolvimento
```bash
npm install
cp .env.example .env
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:3001

## Arquitetura
`apps/web` interface; `apps/api` REST API, serviços, providers, fila e storage; `packages/shared` tipos compartilhados.

Providers reais podem ser adicionados implementando as interfaces em `apps/api/src/providers`. Quando não houver chave configurada, os mocks permitem desenvolvimento sem APIs pagas.

## API
Principais endpoints: `POST /projects`, `GET /projects`, `GET /projects/:id`, `PUT /projects/:id`, `DELETE /projects/:id`, `POST /projects/:id/generate-script`, `POST /projects/:id/generate-scenes`, `POST /projects/:id/generate-images`, `POST /projects/:id/generate-animation-prompts`, `POST /projects/:id/generate-videos`, `POST /projects/:id/generate-narration`, `POST /projects/:id/render`, `GET /projects/:id/progress`, além de regeneração individual por cena.

## Segurança
API keys ficam apenas no backend. O .env.example contém somente placeholders. Em produção, substitua o storage local e o armazenamento de secrets por serviços gerenciados.

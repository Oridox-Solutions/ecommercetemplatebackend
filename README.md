# E-Commerce Backend

Backend application for the Oridox E-Commerce Template.

## Tech Stack

- Prisma
- NestJS
- Docker
- ESLint
- Prettier

## Requirements

- Node.js 22+
- NPM
- NEST

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Auto Fix Lint Issues

```bash
npm run lint:fix
```

## Format Code

```bash
npm run format
```

## Project Structure

```text
src/
├── admin/
├── auth/
├── cart/
├── categories/
├── orders/
├── products/
├── reviews/
└── users/
app.module.ts
main.ts
```

## Dependency Management

Dependabot is enabled.

Security updates are reviewed weekly.

## Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Then update the values in `.env` as required.

## Path aliases

The frontend uses `@` as an alias for the `src` directory.

Example:

```ts
import { Component } from "@/components/Component";
```

## License

Private repository.

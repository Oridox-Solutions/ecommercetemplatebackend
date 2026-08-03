# E-Commerce Backend

Backend application for the Oridox E-Commerce Template.

## Tech Stack

- Prisma
- NestJS
- Docker
- ESLint
- Prettier
- PostgreSQL
- Typescript

## Requirements

- Node.js 22+
- NPM
- NESTJS CLI
- Docker

## Installation

```bash
npm install
```

## Development

```bash
npm run start:dev
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
├── common/
├── health/
├── orders/
├── prisma/
├── products/
├── reviews/
├── users/
├── types/
├── app.module.ts
└── main.ts
```

## API

Backend runs on:

http://localhost:3000

Health check:

GET /health

## Dependency Management

Dependabot is enabled.

Security updates are reviewed weekly.

## Environment Variables

Create a local environment file by copying the example:

```bash
cp .env.example .env
```

Update the values to match your local development environment.

### Database Credentials

Each developer should use their own PostgreSQL credentials.

For consistency, usernames should use your **first name in lowercase**.

Example:

```env
DB_USER=callum
DB_PASSWORD=your_secure_password
DB_NAME=ecommerce

DATABASE_URL=postgresql://callum:your_secure_password@localhost:5432/ecommerce
```

The `.env` file is ignored by Git and should never be committed.

Only `.env.example` should be committed to the repository.

## Local Database

The project uses PostgreSQL running inside Docker for local development.

Start the database:

```bash
docker compose up -d
```

Stop the database:

```bash
docker compose down
```

Reset the database (removes all local data):

```bash
docker compose down -v
docker compose up -d
```

The PostgreSQL database container is created automatically by Docker using the values defined in `.env`.

After starting the database, apply Prisma migrations to create the database schema:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

## Useful Docker Commands

View running containers:

```bash
docker ps
```

View container logs:

```bash
docker compose logs
```

Follow live logs:

```bash
docker compose logs -f
```

Enter the PostgreSQL shell:

```bash
docker exec -it ecommercetemplatebackend-db-1 psql -U <username> -d ecommerce
```

List databases:

```sql
\l
```

List database users:

```sql
\du
```

Exit PostgreSQL:

```sql
\q
```

## License

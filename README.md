# E-Commerce Backend

Backend application for the Oridox E-Commerce Template.

## Tech Stack

- Prisma
- NestJS
- ESLint
- Prettier
- PostgreSQL
- Typescript

## Requirements

- Node.js 22+
- NPM
- NESTJS CLI

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
```

When running locally without docker:

```env
DATABASE_URL=postgresql://callum:your_secure_password@localhost:5432/ecommerce
```

The `.env` file is ignored by Git and should never be committed.

Only `.env.example` should be committed to the repository.

## Prisma

The project uses Prisma as the ORM for interacting with the PostgreSQL database.

### Generate Prisma Client

Generate the Prisma client after installing dependencies or whenever `schema.prisma` changes:

```bash
npx prisma generate
```

### Create a Migration

Create a new migration after modifying the Prisma schema:

```bash
npx prisma migrate dev --name <migration_name>
```

Example:

```bash
npx prisma migrate dev --name add_product_table
```

### Apply Existing Migrations

Apply all existing migrations to your local database:

```bash
npx prisma migrate deploy
```

### Check Migration Status

```bash
npx prisma migrate status
```

### Reset the Database

Deletes all data and reapplies every migration.

```bash
npx prisma migrate reset
```

### Open Prisma Studio

Browse and edit database records in a web interface.

```bash
npx prisma studio
```

## License


## API Documentation

This project uses **Swagger/OpenAPI** to provide interactive API documentation for the backend.

### Accessing the Documentation

Start the development server:

```bash
npm run start:dev
```

Once the server is running, open:

```
http://localhost:3000/api/docs
```

This opens the Swagger UI, where all available API endpoints are automatically documented.

### Features

- Browse all available API endpoints.
- View request methods, parameters and response codes.
- Test endpoints directly from the browser using **Try it out**.
- Documentation updates automatically as new controllers and endpoints are added.
- JWT-protected endpoints are marked with a lock icon.

### Authentication

Some endpoints require authentication.

1. Authenticate using the login endpoint to obtain a JWT access token.
2. Click the **Authorize** button in the top-right corner of Swagger UI.
3. Paste the JWT access token into the dialog.
4. Click **Authorize**.
5. Protected endpoints can now be tested directly from Swagger.

### OpenAPI Specification

The generated OpenAPI specification is available at:

```
http://localhost:3000/api-json
```

This JSON document is generated automatically from the application's controllers and Swagger decorators and can be used by tools that support the OpenAPI standard.

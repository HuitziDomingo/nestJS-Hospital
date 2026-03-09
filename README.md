# Hospital Client

Backend API for the Hospital project — built with **NestJS**, **PostgreSQL**, and **TypeORM**.

**Team:** [Arkelos](https://github.com/arkelos)

---

## Features

- **NestJS 10** — Progressive Node.js framework (TypeScript)
- **PostgreSQL** — Relational database (Docker)
- **TypeORM** — Modern ORM for TypeScript and JavaScript
- **Swagger** — API documentation
- **Docker Compose** — PostgreSQL 16 for local development
- **ESLint & Prettier** — Code style and formatting
- **Jest** — Unit and e2e tests
- **dotenv** — Environment configuration

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Docker](https://www.docker.com/) & Docker Compose (for PostgreSQL)

---

## Install packages

```bash
pnpm install
```

---

## Environment setup

1. Copy the example env file:

   ```bash
   cp .env.example .env
   ```

2. Adjust `.env` if needed. Default values for TypeORM:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=hospital_db
   NODE_ENV=development
   ```

---

## Database (PostgreSQL with Docker)

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Stop:

```bash
docker compose down
```

Default credentials (overridable via `.env`): user `postgres`, password `postgres`, database `hospital_db`, port `5432`.

---

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `pnpm run start`  | Run the app                    |
| `pnpm run start:dev` | Run in watch mode (development) |
| `pnpm run start:debug` | Run with debugger           |
| `pnpm run start:prod` | Run production build        |
| `pnpm run build`  | Build for production           |
| `pnpm run format` | Format code with Prettier      |
| `pnpm run lint`   | Lint and fix with ESLint       |
| `pnpm run test`   | Run unit tests                 |
| `pnpm run test:watch` | Run tests in watch mode   |
| `pnpm run test:cov`   | Run tests with coverage    |
| `pnpm run test:e2e`  | Run e2e tests              |

---

## Project structure

```
src/
├── main.ts           # Application entry point
├── app.module.ts     # Root module with TypeORM config
├── app.controller.ts
├── app.service.ts
├── user/             # User module
│   ├── entities/     # TypeORM entities
│   ├── dto/          # Data Transfer Objects
│   ├── user.service.ts
│   ├── user.controller.ts
│   └── user.module.ts
├── calendar/         # Calendar module
│   ├── entities/
│   ├── dto/
│   ├── calendar.service.ts
│   ├── calendar.controller.ts
│   └── calendar.module.ts
└── ...
```

---

## Tech stack

| Category   | Technology        |
|-----------|--------------------|
| Framework | NestJS 10          |
| Language  | TypeScript 5       |
| Database  | PostgreSQL 16 (Docker), TypeORM |
| API docs  | Swagger / OpenAPI  |
| Package manager | pnpm        |

---

## License

UNLICENSED (private project).

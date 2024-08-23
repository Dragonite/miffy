# Stack

Currently uses Prisma+SQLite as backend, however we can potentially move this to an express server.

3x microservice
- Rest API (Express, Prisma, TypeScript)
- Frontend (NextJS, TypeScript, Tailwind)
- Discord Bot (Queries REST API, Discord JS)

Future goals

- D3.js for graphing time series data (each event will be stored with `Date.valueOf()`)
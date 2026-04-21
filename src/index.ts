import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia with Bun, Drizzle & MySQL!")
  .get("/health", () => ({ status: "ok" }))
  .listen(3000);

console.log(
  `Server is running at ${app.server?.hostname}:${app.server?.port}`
);
// Prisma 7 configuration file
// Used by Prisma CLI for migrations, generate, etc.
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Use DATABASE_URL for all Prisma CLI commands
    url: process.env.DATABASE_URL!,
  },
});

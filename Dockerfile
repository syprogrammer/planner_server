FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate Prisma Client
RUN npx prisma generate
RUN pnpm run build

# Runner stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install OpenSSL (required for Prisma on Linux)
RUN apt-get update -y && apt-get install -y openssl ca-certificates

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Start command (Railway will interpret this or use railway.json override)
CMD ["node", "dist/main"]

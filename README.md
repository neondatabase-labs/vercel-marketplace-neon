![Vercel with Neon](./assets/home.png)

-> View demo: [vercel-marketplace-neon.vercel.app](https://vercel-marketplace-neon.vercel.app/)

# Neon Postgres

A minimal template for building full-stack React applications using Next.js, Vercel, and Neon.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

You can use the package manager of your choice. For example, Vercel also supports `bun install` out of the box.

### Development

#### Create a .env file in the project root

```bash
cp .env.example .env
```

#### Get your database URL

Obtain a connection string for your database from the Connection Details widget on the [Neon Dashboard](https://pg.new).

#### Add your database URL to the .env file

```txt
# The connection string has the format `postgres://user:pass@host/db`
DATABASE_URL=<your-string-here>
```

#### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Neon, check out the Neon documentation:

- [Neon Documentation](https://neon.tech/docs/introduction) - learn about Neon's features and SDKs.
- [Neon Discord](https://discord.gg/9kf3G4yUZk) - join the Neon Discord server to ask questions and join the community.
- [ORM Integrations](https://neon.tech/docs/get-started-with-neon/orms) - find Object-Relational Mappers (ORMs) that work with Neon.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneondatabase-labs%2Fvercel-marketplace-neon%2Ftree%2Fmain&project-name=my-vercel-neon-app&repository-name=my-vercel-neon-app&products=[{%22type%22:%22integration%22,%22integrationSlug%22:%22neon%22,%22productSlug%22:%22neon%22,%22protocol%22:%22storage%22}]&integration-ids:[%22icfg_lhSRHa5eatDuTr7mMudbB48H%22])


# G Can Build - Walkthrough Starter Template

Welcome to the G Can Build Walkthrough starter template! This repository serves as the foundation for the YouTube walkthrough series where we explore building and deploying modern web applications. Link to the YT Channel: https://www.youtube.com/@GeorgeLe

## 🚀 Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **API Layer**: [tRPC](https://trpc.io) for end-to-end typesafe APIs
- **Database**: NeonDB (Serverless Postgres) with Drizzle ORM
- **Authentication**: [Better Auth](https://www.better-auth.com/) with GitHub and Google OAuth providers
- **State Management**: TanStack Query (React Query) with tRPC integration
- **Type Safety**: TypeScript
- **UI Components**:
  - Radix UI primitives
  - Tailwind CSS for styling
  - shadcn/ui component library
  - Various UI utilities (date-fns, recharts, etc.)

## 🛠️ Getting Started

1. Clone this repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_neon_db_connection_string
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Project Structure

```
├── src/
│   ├── app/               # Next.js app router (pages, layouts, API routes)
│   ├── components/        # Reusable UI components
│   │   ├── auth/         # Authentication components
│   │   └── ui/           # shadcn/ui components
│   ├── db/               # Database schema and connection
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   ├── providers/        # React context providers
│   └── trpc/             # tRPC client and server setup
├── drizzle/              # Database migrations and metadata
└── package.json          # Project dependencies and scripts
```

## 🎥 YouTube Walkthroughs

This template is used in the G Can Build YouTube channel walkthroughs. Each walkthrough builds upon this foundation to create various web applications while teaching modern web development concepts.

Follow along with our walkthroughs to learn:
- Full-stack web development
- Modern React patterns and best practices
- Database design and management
- Authentication and authorization
- API development with tRPC
- Deployment and DevOps
- And much more!

## 📦 Key Features

- **Modern React Development**: Next.js 15 with React 19 and Turbopack
- **Type-Safe APIs**: End-to-end type safety with tRPC
- **Database**: PostgreSQL with Drizzle ORM and migrations
- **Authentication**: Better Auth with GitHub and Google OAuth
- **UI Components**: Complete shadcn/ui component library with Radix UI
- **Styling**: Tailwind CSS v4 with responsive design
- **State Management**: TanStack Query for server state
- **Development Tools**: TypeScript, ESLint, and modern tooling configured

## 🤝 Contributing

Feel free to use this template for your own projects or contribute improvements. Issues and pull requests are welcome!

## 📝 License

This project is open source and available under the MIT license.

---

Built with ❤️ by G Can Build

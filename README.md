# Rone — Personal Portfolio & Project Showcase

A minimalist, high-performance personal portfolio and project showcase built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed and built for **Rone** (Student & Indie Developer) to showcase independent web applications, algorithm tools, and software automation pipelines.

---

## 🚀 Featured Projects

- **[Cinepeak](https://github.com/Heisenburgerfrr/portfolio)** — A Next.js streaming aggregator for movies, TV shows, and live sports using TMDB API metadata, custom trailer-fetching, and bot-blocking middleware.
- **[Longly](https://github.com/Heisenburgerfrr/portfolio)** — A satirical URL "longener" powered by a custom bijective mnemonic encoding algorithm that deterministically expands links into phrase sequences.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [Resend API](https://resend.com/)
- **Formatting & Linting**: [Prettier](https://prettier.io/) & ESLint
- **Analytics**: Vercel Analytics

---

## ✨ Key Features

- 📱 **100% Responsive Design**: Optimized layouts for mobile phones, tablets, and desktop displays.
- ⚡ **High-Performance Server Components**: Optimized Server Components (including custom 404 page) for near-instant loads.
- 🔍 **SEO & Metadata Optimization**: Complete Open Graph, Twitter Cards, and JSON-LD Person schema integration.
- 🎨 **Glassmorphism UI System**: Floating navigation bar, custom tooltips, and subtle micro-interactions.
- 📬 **Contact Form Integration**: Direct email forwarding via Resend API.

---

## 📁 Project Structure

```text
├── _data/               # Project content data & metadata definitions
├── public/              # Static assets (images, favicon, manifest)
├── src/
│   ├── app/             # Next.js 15 App Router pages & API routes
│   │   ├── api/send/    # Contact form Resend email endpoint
│   │   ├── project/     # Dynamic project detail pages ([slug])
│   │   ├── projects/    # All projects archive page
│   │   ├── not-found.tsx# Custom Server-Side 404 page
│   │   └── layout.tsx   # Root layout with SEO metadata & schema
│   ├── components/      # UI components (Hero, About, Project, Navbar, etc.)
│   └── lib/             # Utility functions & helpers
├── .env.example         # Environment variable template
└── package.json         # Scripts and project dependencies
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- `pnpm` package manager installed globally

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Heisenburgerfrr/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Fill in your configuration:

   ```env
   RESEND_API_KEY=re_your_api_key_here
   NEXT_PUBLIC_CONTACT_EMAIL=me@example.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📜 Available Scripts

- `pnpm run dev` — Starts the development server with Turbopack.
- `pnpm run format` — Formats all codebase files with Prettier.
- `pnpm run format:check` — Checks formatting consistency across files.
- `pnpm run lint` — Runs ESLint for syntax and quality checks.

---

## 👤 Author

- **Rone** — Student & Indie Developer
- **GitHub**: [@Heisenburgerfrr](https://github.com/Heisenburgerfrr)
- **X**: [@RoneReji](https://x.com/RoneReji)
- **Email**: [me@rone.cc.cd](mailto:me@rone.cc.cd)

export const projects = [
  {
    name: "Cinepeak",
    slug: "cinepeak",
    show: "A Next.js streaming aggregator for movies, TV, and live sports with TMDB metadata, trailer-fetching, and bot-blocking middleware.",
    desc: "Cinepeak is a streaming aggregator for movies, TV shows, and live sports. Powered by Next.js and TMDB API metadata, it features custom trailer-fetching mechanisms and bot-blocking middleware for safe, high-performance streaming aggregation.",
    lang: [
      "Next.js",
      "TypeScript",
      "TMDB API",
      "Tailwind CSS",
      "Middleware",
      "Node.js",
    ],
    img: "judesolar.png",
    img2: "judesolar2.png",
    img3: "judesolar3.png",
    link: "https://github.com/Heisenburgerfrr",
    git: "https://github.com/Heisenburgerfrr",
    problem:
      "Accessing live sports streams and movie metadata across third-party sources is often fragmented, slow, and prone to heavy bot traffic or broken links.",
    solution:
      "Built Cinepeak using Next.js and TMDB API integration, embedding dynamic iframe streams alongside custom bot-blocking middleware and an automated trailer-fetching pipeline.",
  },
  {
    name: "Longly",
    slug: "longly",
    show: "A satirical URL 'longener' that makes links longer using a custom bijective mnemonic encoding algorithm.",
    desc: "Longly turns concise links into hilariously long, memorable word sequences. Built around a custom bijective mnemonic encoding algorithm, it reverses standard URL shortening while preserving deterministic bidirectional mapping.",
    lang: ["React", "TypeScript", "Algorithms", "Tailwind CSS", "Next.js"],
    img: "notionclone.png",
    link: "https://github.com/Heisenburgerfrr",
    git: "https://github.com/Heisenburgerfrr",
    problem:
      "Standard URL shorteners obscure link destinations and make shared URLs uniform and unmemorable.",
    solution:
      "Engineered Longly as a satirical link expander powered by a custom bijective mnemonic encoder that deterministically maps URLs into expanded, humorous phrase strings.",
  },
];

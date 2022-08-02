export const firstName = "Alec";
export const lastName = "Helmturner";
export const gitHubUrl = "https://github.com/alecvision";
export const linkedInUrl = "https://www.linkedin.com/in/alechelmturner/";
export const title = "Full-Stack Web Developer";
export const email = "alec@alecvision.com";
export const phone = "+1 918-404-2425";
export const bioParagraphs = [
  `
    I'm a self-taught developer driven by my passions, which include
    learning, engineering, problem- solving, and entrepreneurship. I've
    configured LANs, provisioned servers on the edge and in the cloud,
    deployed containerized micro-services, and engineered full-stack web
    apps — all just for fun.
  `,
  `
    My goal is to harness my skills to make a positive impact in
    people's day-to-day lives. I believe I can achieve that goal by building
    software that solves real-world problems and by crafting compelling
    experiences on behalf of others that seek to do the same.
  `,
];
export const skills = [
    "HTML",
    "JS",
    "TS",
    "CSS",
    "React",
    "NextJS",
    "Github",
    "REST",
    "GraphQL",
    "Schemas",
    "Resolvers",
    "Apollo",
    "Node",
    "Docker",
    "API Design",
    "Express",
    "MongoDB",
    "...and more!",
  ]

const githubBase = "https://github.com/alecvision";
export const projects: { [key: string]: Project } = {
  portfolio: {
    slug: "portfolio",
    title: "My Portfolio Website",
    tech: ["NodeJS", "NextJS", "TypeScript", "React"],
    repos: [`${githubBase}/alec-portfolio`],
    subtitle:
      "My Portfolio site, bulit in 2 days with NextJS, TypeScript, and React",
    description: `
        Many mentors recommended that I build a website to show off my skills, so I took the advice.
        
        What started as a speedrun challenge ended up as a lesson: I needed to learn more about CSS.
        
        That's why this portfolio is built with minimal dependencies and 100% custom CSS.
        
        Maybe I'm still not the best designer, but given a good design, I now know how to implement it!
    `,
  },
  airtable: {
    slug: "airtable",
    title: "Airtable",
    repos: [`${githubBase}/airtable-scripts`],
    tech: ["JavaScript", "Airtable", "REST APIs"],
    subtitle:
      "Where it all started: plain JS, guided by the loving hand of Airtable's built-in editor.",
    description: `
        In an effort to optimize my gig-economy earnings, I set out to aggregate every scrap of data I had and identify the patterns.

        This brought me to Airtable, a low-code, table-based data management platform. It didn't take long for me to realize that I could transform that data in interesting ways to unearth surprising insights... all I had to do was use a tiny bit of whatever this "JavaScript" thing was.

        I was hooked. The build-in autocomplete and readily-available API documentation made learning my first programming language fun and intuitive.
        
        Because the editor was backed by a Typescript Language server, I learned more than I even knew at the time. Mastering TypeScript was a small step away once I outgrew the sandbox and began writing code in the real world.

        Some of the first working code I wrote has been archived on GitHub.
        `,
  },
  duewell: {
    slug: "duewell",
    title: "Duewell",
    repos: [`${githubBase}/duewell-ts`, `${githubBase}/duewell-api-ts`],
    tech: [
      "Azure Applied AI",
      "Plaid",
      "NodeJS",
      "NextJS",
      "React",
      "TypeScript",
      "React-Query",
      "GraphQL",
      "Express",
      "Docker",
      "MongoDB",
    ],
    subtitle:
      "My most abitious (read: over-engineered) project: a full-stack financial management app powered by Auth0, Plaid, Azure Applied AI, and MongoDB in Docker.",
    description: `
    Though I had mastered JavaScript by writing Airtable Apps (now called Extensions), I knew I needed a broader understanding of enterprise-grade software development tools and resources. Naturally, the next logical step was an advanced full-stack financial management application.

    The design involved leveraging Microsoft Azure's deep-learning AI model for receipts (via their 'form-recognizer' API) and the Plaid API to automatically balance and categorize expenses by matching the user's account transactions with information inferred from user-uploaded receipt images.
    
    The back-end logic was originally implemented with Next.js API routes as part of this repo, but now lives in a separate repo: alecvision/duewell-api-ts.
    
    This application is still under semi-active development and will receive updates as time permits. The current goal is to re-implement the API using GraphQL, but it's a large undertaking and free time is scarce; this project may frequently be shelved in favor of more readily attainable goals.
    `,
  },
  "unified-plugins": {
    slug: "unified-plugins",
    title: "Unified Plugins",
    repos: [
      `${githubBase}/remark-morematter`,
      `${githubBase}/remark-excerpt`,
      `${githubBase}/remark-validate-vfile`,
    ],
    tech: ["Unified", "Remark", "Rehype", "TypeScript"],
    subtitle:
      "A set of small utility plugins to help with rendering Markdown in the browser.",
    description: `
        These utility plugins were created as part of my ongoing work on the Code For Tulsa website rebuild.

        Becuase the organization brings together professionals from different fields, a key goal was to make markdown the primary format for non-technical contributions.

        Because the organization is a non-profit, another key goal was to do it cheaply, or for free.

        Ultimately, my goal is to compose these plugins into a webpack loader and NextJS plugin, creating a plug-and-play solution for the missing Static Site Generation (SSG) features of NextJS.
    `,
  },
  "code-for-tulsa": {
    slug: "code-for-tulsa",
    title: "2021 Code For Tulsa Website Rebuild",
    repos: ["https://github.com/code-for-tulsa/website"],
    tech: [
      "NodeJS",
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "React",
      "Unified",
      "Remark",
      "Rehype",
    ],
    subtitle:
      "The official site, designed to facilitate contributions from contributors of all backgrounds.",
    description: `
    As of the beginning of 2022, the Code for Tulsa website had not been updated in 6 years. This repo started as an effort to modernize the core site and create a dynamic working environment that facilitates additional contributions from current and future volunteers of all backgrounds.

    When I first joined the project, the requirements were simple: create a web blog that facilitates content contributions from non-technical volunteers. Because of this, the project was initially bootstrapped with create-gatsby-app as a static website.
    
    Soon after, discussions began brewing around the idea of integrating other resources utilized by the organization, such as Twitter, Slack, Meetup, etc. It was agreed that a more flexible framework was needed to keep up with the dynamic demands of the organization.
    
    After leading the effort to conver the project to NextJS for deployment on serverless platforms, I earned the role of Lead Developer. Since then, I've been hard at work un-blocking co-contributors, improving the quality of the codebase, and progressing the site towards launch.
    `,
  },
};

export const featuredProjects: string[] = [
  "code-for-tulsa",
  "duewell",
  "portfolio",
  "unified-plugins",
  "airtable",
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  imageUrl?: string;
  tech: string[];
  repos: string[];
  slug: string;
};

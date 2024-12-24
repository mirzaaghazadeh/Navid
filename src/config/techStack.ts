interface TechItem {
  name: string;
  version?: string;
  description: string;
}

interface TechStack {
  [key: string]: TechItem[];
}

export const techStackData: TechStack = {
  "Core Technologies": [
    {
      name: "React",
      version: "v18.3.1",
      description: "Frontend library"
    },
    {
      name: "TypeScript",
      description: "For type-safe JavaScript"
    },
    {
      name: "Vite",
      version: "v5.4.2",
      description: "Build tool and dev server"
    }
  ],
  "Styling & UI": [
    {
      name: "Tailwind CSS",
      version: "v3.4.1",
      description: "Utility-first CSS framework"
    },
    {
      name: "Lucide React",
      version: "v0.344.0",
      description: "Icon library"
    }
  ],
  "Development Tools": [
    {
      name: "ESLint",
      version: "v9.9.1",
      description: "Code linting"
    },
    {
      name: "PostCSS",
      version: "v8.4.35",
      description: "CSS processing"
    },
    {
      name: "Autoprefixer",
      version: "v10.4.18",
      description: "CSS vendor prefixing"
    }
  ]
};
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "X-Boost",
    title: "X-Boost",
    description: "An AI powered X automation tool",
    longDescription: `
      A hackathon app that lets u automate X posts using AI:
      • Real-time meme collection
      • Automates 16 X posts per day
      • Uses AI to generate memes and posts
      • Affordable and easy to use
      • Marketing at your fingertips
    `,
    technologies: ["Next.js", "TailwindCSS", "Node.js", "GeminiAPI", "vercel"],
    image: "./x-boost.png",
    githubUrl: "https://github.com/Akshitzz/XBoost",
    size: "large",
  },
  {
    id: "viusal-teacher",
    title: "An AI Visual Teacher",
    description:
    "A visual teacher which takes question in image/text in real time and gives answer in text/audio",
    longDescription: `
    An app that uses gemini api to take in questions in image/text and gives answer in text/audio:
    • Contextual understanding of the question
    • Question in image/text
      • Response in text/audio
      • Real time video input
      • Markdown Answer support
    `,
    technologies: [
      "Next.js",
      "Node.js",
      "GeminiAPI",
      "TailwindCSS",
      "vercel",
      "BrowserAPI",
    ],
    image: "./visual-teacher.png",
    githubUrl: "https://github.com/bhaveshsinghal95182/ai-visual-teacher.git",
    liveUrl: "https://ai-visual-teacher.vercel.app/",
    size: "small",
  },
  {
    id: "Prompt-Archive",
    title: "Prompt-Archive",
    description: "A project to make it easy to find writing prompts",
    longDescription: `
      Features:
      • Search Prompts: Find prompts by tags (e.g., fitness, creative) or by content keywords.
      • Write Your Own Prompts: Add custom prompts directly from the app.
      • Import/Export Prompts: Save your prompts in a JSON file for easy backup and sharing. Import JSON files to restore or share your collection.
      • Multi-Model Support: Prompts tailored for ChatGPT, Claude, Gemini, and Llama.
    `,
    technologies: ["React.js", "Vite", "TailwindCSS", "vercel"],
    image: "./Prompt-Archive.png",
    githubUrl: "https://github.com/bhaveshsinghal95182/Prompt-Archive.git",
    size: "small",
    liveUrl: "https://prompt-archive.vercel.app/",
  },
  {
    id: "JARVIS",
    title: "JARVIS",
    description: "A python AI application running on streamlit",
    longDescription: `
      Built an AI app that compeltes tasks all locally:
      • Data privacy due to local usage with ollama
      • Various Task Automations
      • Dynamic link opening using GenAI
      • Image Generation Using GenAI 
    `,
    technologies: [
      "Python",
      "Ollama",
      "GeminiAPI",
      "Function Calling",
      "DuckDuckGo",
    ],
    image: "./jarvis.jpg",
    githubUrl: "https://github.com/bhaveshsinghal95182/jarvis.git",
    size: "small",
  },
  {
    id: "Sticky-Notes",
    title: "Sticky Notes TODO app",
    description: "A Todo app but its sticky notes with ai",
    longDescription: `
      A sticky notes app tutorial on free code camp but with my touch of ai:
      • Tracks todos in a fancy manner
      • Uses backend to save the notes
      • Dynamically Colorful notes 
      • Autosave if typing is stopped
      • React Context API
    `,
    technologies: ["React", "Appwrite", "Node.js", "OpenAI"],
    image: "./stickynotes.jpg",
    githubUrl: "https://github.com/bhaveshsinghal95182/aistickynotes.git",
    size: "small",
  },
];

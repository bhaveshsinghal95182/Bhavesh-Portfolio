import { Project } from "@/types/project";

export const projects: Project[] = [
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
    size: "large",
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
    technologies: ["React.js", "Vite","TailwindCSS", "vercel"],
    image: "./Prompt-Archive.png",
    githubUrl: "https://github.com/bhaveshsinghal95182/Prompt-Archive.git",
    size: "small",
    liveUrl: "https://prompt-archive.vercel.app/",
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

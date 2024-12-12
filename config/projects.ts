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
    id: "Navacharan",
    title: "Navacharan",
    description: "Traditional LMS on steroids powered by AI (Hackathon Project)",
    longDescription: `
      An AI powered Learning Management System:
      • Introducing ranks and Star based system to lms
      • Students chat and communication
      • File sharing and attachments
      • Progress tracking and reporting
      • Integration with AI to create a Study Buddy that helps when stuck
    `,
    technologies: ["React.js", "SCSS", "MySQL", "Django", "OpenAI API"],
    image: "./lmsadmin.jpg",
    githubUrl: "https://github.com/Ayush001122/lms-github.git",
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

export interface Session {
  id: string;
  date: Date;
  messages: string[];
  prompts: Prompt[];
  activePrompt?: Prompt;
}

export interface Prompt {
  id: string;
  title: string;
}

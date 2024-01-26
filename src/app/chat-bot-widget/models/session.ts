export interface Session {
  id: string;
  date: Date;
  messages: string[];
  prompts: Prompt[];
  activePrompt?: Prompt;
  allMessagesShown?: boolean;
}

export interface Prompt {
  id: string;
  title: string;
}

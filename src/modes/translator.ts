import {
  Env,
  Message,
} from "../types.js";
import { Conversation } from "./conversation.js";
import { ChatGPTAPIBrowser } from "chatgpt";

const PREFIX = "帮我翻译下面这段，如果是英文翻译成中文，中文则翻译成英文。";

export class Translator extends Conversation {
  constructor(chatgpt: ChatGPTAPIBrowser) {
    super(chatgpt);
  }

  async onMessage(text: string, env: Env): Promise<Message> {
    const prompt = PREFIX + text;
    return await this.send(prompt, env);
  }

  help(): string {
    return "Translator 模式：中英文互相翻译";
  }
}

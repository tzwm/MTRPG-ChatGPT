import { Conversation } from "./conversation.js";
import { DreamilyAPI } from "../dreamily-api.js";
import { Env } from "../types.js";
import { removeCmdPrefix } from "../utils.js";

export class StoryDreamily extends Conversation {
  universeId: string;

  constructor(dreamily: DreamilyAPI) {
    super(dreamily);

    this.universeId = "";
  }

  async onMessage(text: string, env: Env): Promise<void> {
    if (text.startsWith("/start")) {
      this.universeId = removeCmdPrefix(text);
      env.replyFunc(`世界设定为：${this.universeId}`);
      return;
    }

    const msg = await this.send(text, env);
    env.replyFunc(msg.response);
  }

  help(): string {
    return `> 小梦 Story 模式：大家一起和小梦写故事。
/start #{universe_id} 世界设定的 ID`;
  }
}

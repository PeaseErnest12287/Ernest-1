export default {
    name: 'tagall',
    description: 'Mention all group members',
    execute: async ({ client, message }) => {
      if (!message.isGroupMsg) {
        return { error: 'This command only works in groups!' };
      }
  
      const participants = await client.getGroupMembers(message.chatId);
      return {
        mentions: participants.map(p => `@${p.id.split('@')[0]}`),
        message: '📢 Group notification:'
      };
    }
  };
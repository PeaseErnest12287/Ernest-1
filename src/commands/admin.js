// src/commands/admin.js
export default {
    name: 'admin',
    description: 'Manage group admins',
    execute: async ({ client, message, args }) => {
      if (!message.isGroupMsg) {
        return { error: '❌ This command only works in groups!' };
      }
  
      const action = args[0]?.toLowerCase();
      const target = args[1];
  
      if (!action) {
        const admins = await client.getGroupAdmins(message.chatId);
        return {
          title: '👑 Current Admins',
          list: admins.map(a => `• @${a.split('@')[0]}`)
        };
      }
  
      switch (action) {
        case 'add':
          await client.promoteParticipant(message.chatId, target);
          return { success: `✅ @${target} promoted to admin!` };
          
        case 'remove':
          await client.demoteParticipant(message.chatId, target);
          return { success: `❌ @${target} demoted from admin.` };
          
        default:
          return { error: 'Invalid action! Use: !admin [add/remove] @user' };
      }
    }
  };
const { Asena, isPublic } = require("../lib/");

Asena(
  {
    pattern: "ping",
    fromMe: false,
    desc: "Check bot speed & performance ⚡",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    
    // Adding a cool typing effect
    await message.reply("🌀 *Testing Speed...* ⏳");
    
    const end = new Date().getTime();
    const responseTime = end - start;
    
    // Randomized responses for a more dynamic feel
    const messages = [
      `🚀 *Ernest Bot v1.0.0* is 🔥 *Super Fast!* 🚀\n`,
      `⚡ *Boom!* ⚡ Speed tested! 🏎️💨\n`,
      `🔋 *Energy at Max!* Ernest Bot ⚡ is ready! 🦾\n`,
      `🤖 *AI Mode:* Online & Fast! 🔥\n`
    ];

    const finalMessage = `💠 *WhatsApp AI On Point!* 💠\n` +
      `🎯 *Response Time:* _${responseTime}ms_\n` +
      `🔹 *Status:* _Online & Active!_\n\n` +
      `📞 *Owner:* wa.me/254793859108\n` +
      `💎 *Powered by Ernest Bot!* 🚀`;

    return await message.reply(messages[Math.floor(Math.random() * messages.length)] + finalMessage);
  }
);

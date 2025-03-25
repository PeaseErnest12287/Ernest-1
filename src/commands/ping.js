export default {
    name: 'ping',
    description: 'Check bot latency',
    execute: () => ({
      status: 'online',
      response: '🏓 Pong! | Latency: <50ms'
    })
  };
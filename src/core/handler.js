import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import formatter from '../utils/formatter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commands = {};

// Dynamic command loading
fs.readdirSync(path.join(__dirname, '../commands'))
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    import(`../commands/${file}`).then(module => {
      commands[file.split('.')[0]] = module.default;
    });
  });

export const handleMessage = async (client, message) => {
  if (!message.body?.startsWith('!')) return;
  
  const [cmd, ...args] = message.body.slice(1).split(' ');
  if (commands[cmd]) {
    const response = await commands[cmd].execute({ client, message, args });
    client.sendText(
      message.from,
      formatter(response)
    );
  }
};
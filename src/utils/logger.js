import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logDir = path.join(__dirname, '../../logs');

// Create logs directory if missing
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logLevels = {
  error: chalk.red.bold,
  warn: chalk.yellow,
  info: chalk.cyan,
  debug: chalk.magenta,
  success: chalk.green
};

const logger = {
  log: (level, message, ...args) => {
    const timestamp = new Date().toISOString();
    const coloredLevel = logLevels[level]?.(`[${level.toUpperCase()}]`) || `[${level}]`;
    const logMessage = `${timestamp} ${coloredLevel} ${message}`;

    console.log(logMessage, ...args);
    fs.appendFileSync(path.join(logDir, 'ernest.log'), `${timestamp} [${level}] ${message}\n`);
  }
};

// Add shortcut methods
['error', 'warn', 'info', 'debug', 'success'].forEach(level => {
  logger[level] = (msg, ...args) => logger.log(level, msg, ...args);
});

export default logger;
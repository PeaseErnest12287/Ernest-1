import venom from 'venom-bot';
import { config } from 'dotenv';
import logger from '../utils/logger.js';

config();

const startBot = async () => {
  try {
    logger.info('🚀 Starting Ernest Bot...');
    
    await venom.create({
      session: 'ernest-render',
      multidevice: true, // ← MUST be true
      headless: 'new',  // ← Runs invisibly
      logQR: true,      // ← Output QR to logs
      disableSpins: true,
      browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    logger.success('✅ Bot successfully connected!');

    // Keep process alive
    setInterval(() => {}, 1000);

    process.on('SIGINT', () => {
      logger.info('🛑 Shutting down bot...');
      client.close().then(() => process.exit());
    });

  } catch (error) {
    logger.error('Bot failed to start:', error);
    process.exit(1);
  }
};

startBot();


// logger.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();
const tok=import.meta.env.VITE_LOGGLY_TOKEN
// Initialize the logger with  details
logger.push({
  logglyKey: tok, 
  sendConsoleErrors: true,
  tag: 'react-tv-app', // tag your logs for easier filtering
  useUtfEncoding: true // ensures special characters are handled correctly
});

export default logger;

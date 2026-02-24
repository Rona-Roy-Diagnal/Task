/* eslint-disable @typescript-eslint/no-explicit-any */
// import { logEvent } from "./Loggly"



















// logger.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

// Initialize the logger with your details
logger.push({
  logglyKey: '2b674e01-291c-4e4b-a5e8-549cf7d2575c', // Replace with your actual token
  sendConsoleErrors: true, // Optional: automatically send console errors
  tag: 'react-tv-app', // Optional: tag your logs for easier filtering
  useUtfEncoding: true // Optional: ensures special characters are handled correctly
});

export default logger;

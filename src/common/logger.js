import winston from 'winston';

var logger = new(winston.Logger)({
  transports: [
      new(winston.transports.Console)({
      level: 'debug',
      handleExceptions: true,
      colorize: true
    }),
  ],
  exitOnError: false
});

export default logger;

import process from "node:process";
import chalk from "chalk"

const levels = {
  INFO: chalk.green("INFO"),
  DEBUG: chalk.blue("DEBUG"),
  WARN: chalk.yellow("WARN"),
  ERROR: chalk.red("ERROR"),
  FATAL: chalk.magenta("FATAL")
}
export class Logger {
  info (obj) {
    console.info(`[PID:${process.pid}][${levels.INFO}]`, typeof obj === 'string' ? obj : JSON.stringify(obj))
  }

  error (...args) {
    console.error(`[PID:${process.pid}][${levels.ERROR}]`, ...args)
  }

  fatal (...args) {
    console.error(`[PID:${process.pid}][${levels.FATAL}]`, ...args)
  }
}

export const logger = new Logger()

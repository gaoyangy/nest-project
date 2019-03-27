import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import chalk from 'chalk';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...', req.url, req.body, req.params, req.query, res.statusCode);
    var logger:string;
    if (res.statusCode === 200) {
      logger = chalk.green(`${res}  url: ${req}`)
    } else {
      logger = chalk.red(`url: ${req}`)
    }
    console.log(req)
    next();
  }
}

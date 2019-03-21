import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ErrorInfo } from '../interface/error';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const errorInfo: ErrorInfo  = {
      code: exception.getStatus(),
      message: exception.message.message
    }
    response
      .status(status)
      .json(errorInfo);
  }
}

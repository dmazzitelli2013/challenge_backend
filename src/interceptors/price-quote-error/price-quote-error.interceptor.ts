import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { PriceQuoteDuplicatedException } from 'src/exceptions';

@Injectable()
export class PriceQuoteErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if ('original' in error && 'code' in error.original) {
          switch (error.original.code) {
            case '23505':
              throw new PriceQuoteDuplicatedException();
            default:
              throw error;
          }
        }
        throw error;
      }),
    );
  }
}
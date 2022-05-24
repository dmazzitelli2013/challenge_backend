import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { WalletDuplicatedException } from '../exceptions/wallet-duplicated.exception';

@Injectable()
export class WalletErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // TODO: refactor this
        if (error instanceof BadRequestException) {
          throw error;
        }
        switch (error.original.code) {
          case '23505':
            throw new WalletDuplicatedException();
          default:
            throw error;
        }
      }),
    );
  }
}

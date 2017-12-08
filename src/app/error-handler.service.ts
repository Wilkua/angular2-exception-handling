import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor (private injector: Injector) {
    super();
  }

  public handleError (err: any): void {
    const router = this.injector.get(Router);
    router.navigate(['/error']);
    super.handleError(err);
  }
}

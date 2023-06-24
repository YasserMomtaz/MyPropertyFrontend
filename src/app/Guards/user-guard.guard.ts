import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

export const userGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authentication = inject(AuthenticationService);

  if (
    authentication.isAuth$.value.Role == 'User' &&
    authentication.isAuth$.value.isAuthorized == true
  ) {
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localEmail = localStorage.getItem('email');
  const router = inject(Router);
  if (localEmail == null) {
    router.navigateByUrl('login');
  } else {
    return true;
  }
  return true;
};

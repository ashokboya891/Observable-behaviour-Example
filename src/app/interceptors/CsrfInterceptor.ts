import { HttpInterceptorFn } from '@angular/common/http';

export const CsrfInterceptor: HttpInterceptorFn = (req, next) => {
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN'))
    ?.split('=')[1];

  if (csrfToken) {
    const clonedRequest = req.clone({
      setHeaders: { 'X-XSRF-TOKEN': csrfToken }
    });
    return next(clonedRequest);
  }

  return next(req);
};

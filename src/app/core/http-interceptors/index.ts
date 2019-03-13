/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UrlInterceptor } from './url.interceptor';
import { AuthInterceptor} from './auth.interceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UrlInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];

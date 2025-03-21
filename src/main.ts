import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { CsrfInterceptor } from './app/interceptors/CsrfInterceptor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// ✅ Bootstrap standalone component correctly
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes), 
//     importProvidersFrom(FormsModule),
//     provideHttpClient(withInterceptors([CsrfInterceptor])) // ✅ Use interceptor properly
//   ]
// }).catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


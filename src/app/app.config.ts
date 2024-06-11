import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"portfolio-89e77","appId":"1:625697723944:web:dcb28cc56e3e88d736471d","storageBucket":"portfolio-89e77.appspot.com","apiKey":"AIzaSyAv58JtCWcqNJo8OiN0ahpjCySrJJ8ByyA","authDomain":"portfolio-89e77.firebaseapp.com","messagingSenderId":"625697723944"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

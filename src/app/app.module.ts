import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './basic/nav/nav.component';
import { HomeComponent } from './basic/home/home.component';
import { FooterComponent } from './basic/footer/footer.component';
import { WorkersComponent } from './basic/workers/workers.component';
import { IntroductionComponent } from './basic/introduction/introduction.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WorkersLoginComponent } from './auth/workers-login/workers-login.component';
import { ClientLoginComponent } from './auth/client-login/client-login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    WorkersComponent,
    IntroductionComponent,
    WorkersLoginComponent,
    ClientLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

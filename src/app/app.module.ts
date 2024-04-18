import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './basic/nav/nav.component';
import { HomeComponent } from './basic/home/home.component';
import { FooterComponent } from './basic/footer/footer.component';
import { WorkersComponent } from './basic/workers/workers.component';
import { IntroductionComponent } from './basic/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    WorkersComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

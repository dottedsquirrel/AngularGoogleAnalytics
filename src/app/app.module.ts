import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './shop/shop.component';

import {GoogleAnalyticsService} from './services/google-analytics.service';

export const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'shop', component:ShopComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

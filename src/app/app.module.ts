import { BanlistService } from './ygobanlist/ygobanlist.service';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { YgobanlistComponent } from './ygobanlist/ygobanlist.component';

import { BannedcardComponent } from './bannedcard/bannedcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    ErrorComponent,
    ProjectComponent,
    DetailComponent,
    YgobanlistComponent,
    
    BannedcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ContactService, BanlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

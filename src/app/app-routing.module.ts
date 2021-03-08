import { BannedcardComponent } from './bannedcard/bannedcard.component';
import { YgobanlistComponent } from './ygobanlist/ygobanlist.component';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"detail", component:DetailComponent},
  {path:"contact", component:ContactComponent},
  {path:"project", component:ProjectComponent },
  {path:"banlist", component:YgobanlistComponent},
  {path:"banlist/:cardId", component:BannedcardComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
  providers: [Title]
})
export class AppRoutingModule { }

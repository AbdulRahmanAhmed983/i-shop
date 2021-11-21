import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';






const routes:Routes = [
  {path:"home",component:IndexComponent},
  {path:"shop",component:ShopComponent},
  {path:"blog",component:BlogComponent},
  {path:"team",component:TeamComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}

];


@NgModule({
  declarations: [
    IndexComponent,
    ShopComponent,
    BlogComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent
  ],  imports: [
    CommonModule, 
    RouterModule.forRoot(
      routes
      
    )
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

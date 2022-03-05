import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    NoFoundComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    FavoritesComponent,
    NoFoundComponent
  ]
})
export class PagesModule { }

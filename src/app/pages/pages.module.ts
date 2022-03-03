import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    NoFoundComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    FavoritesComponent,
    NoFoundComponent,
    FilterComponent
  ]
})
export class PagesModule { }

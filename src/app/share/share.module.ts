import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { FavoritePipe } from './favorite.pipe';



@NgModule({
  declarations: [
    NewsComponent,
    MenuComponent,
    FavoritePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsComponent,
    MenuComponent
  ]
})
export class ShareModule { }

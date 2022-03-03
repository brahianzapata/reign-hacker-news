import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    NewsComponent,
    MenuComponent
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

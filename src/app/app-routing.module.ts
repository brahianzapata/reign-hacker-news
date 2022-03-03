import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FilterComponent } from './pages/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'no-found',
    component: NoFoundComponent
  },
  {
    path: 'filter/:name',
    component: FilterComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/no-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

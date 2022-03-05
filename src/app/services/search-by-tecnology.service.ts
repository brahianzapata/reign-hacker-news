import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hit, ResponseNew } from '../interface/reponse-news';

@Injectable({
  providedIn: 'root'
})
export class SearchByTecnologyService {

  private baseUrl: string = 'https://hn.algolia.com/api/v1/';
  public newsByTecnologyLocalStorage: Hit[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarFavoritos();
  }

  getNewsByTecnology( tecnology: string, page: number ): Observable<ResponseNew>{
    console.log('getNewsByTecnologyServices -> ', tecnology, page);
    return this.http.get<ResponseNew>(`${ this.baseUrl }/search_by_date?query=${ tecnology  }&page=${ page }`);
  }

  /* Favoritos */ 

  cargarFavoritos(): void{
    if (localStorage.getItem('favoritesCountries')){
      this.newsByTecnologyLocalStorage = JSON.parse(localStorage.getItem('favoritesCountries')  || '{}');
    }else{
      this.newsByTecnologyLocalStorage = [];
    }
  }

  agregarFavorito( hit: Hit): void{
    this.newsByTecnologyLocalStorage.push(hit);
    this.guardarLocalStorage();
  }

  eliminarFavorito( title: string): void{
    this.newsByTecnologyLocalStorage = this.newsByTecnologyLocalStorage.filter( (hit: Hit) => hit.title !== title);
    this.guardarLocalStorage();
  }

  guardarLocalStorage(): void{
    localStorage.setItem('favoritesCountries', JSON.stringify(this.newsByTecnologyLocalStorage));
    this.cargarFavoritos();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hit, HitFavorite, ResponseNew } from '../interface/reponse-news';

@Injectable({
  providedIn: 'root'
})
export class SearchByTecnologyService {

  private baseUrl: string = 'https://hn.algolia.com/api/v1/';
  public newsByTecnologyLocalStorage: HitFavorite[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarFavoritos();
  }

  getNewsByTecnology( tecnology: string, page: number ): Observable<ResponseNew>{
    console.log('getNewsByTecnologyServices -> ', tecnology, page);
    return this.http.get<ResponseNew>(`${ this.baseUrl }/search_by_date?query=${ tecnology  }&page=${ page }`);
  }

  /* Favoritos */ 

  cargarFavoritos(): void{
    if (localStorage.getItem('favoritesHits')){
      this.newsByTecnologyLocalStorage = JSON.parse(localStorage.getItem('favoritesHits')  || '{}');
    }else{
      this.newsByTecnologyLocalStorage = [];
    }
  }

  agregarFavorito( hit: HitFavorite): void{
    this.newsByTecnologyLocalStorage.push(hit);
    this.guardarLocalStorage();
    console.log(JSON.parse(localStorage.getItem('favoritesHits')  || '{}'));
  }

  eliminarFavorito( story_id: number ): void{
    this.newsByTecnologyLocalStorage = this.newsByTecnologyLocalStorage.filter( (hit: HitFavorite) => hit.story_id !== story_id);
    this.guardarLocalStorage();
  }

  guardarLocalStorage(): void{
    localStorage.setItem('favoritesHits', JSON.stringify(this.newsByTecnologyLocalStorage));
    this.cargarFavoritos();
  }

  buscarFavorito( story_id: number, author: string ): HitFavorite {
      return this.newsByTecnologyLocalStorage.filter( (hit: HitFavorite) =>  
          hit.story_id === story_id && hit.author === author)[0];
  }

}

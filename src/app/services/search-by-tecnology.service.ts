import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HitFavorite, ResponseNew } from '../interface/reponse-news';

@Injectable({
  providedIn: 'root'
})
export class SearchByTecnologyService {

  private baseUrl: string = 'https://hn.algolia.com/api/v1/';
  public newsByTecnologyLocalStorage: HitFavorite[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarFavoritos();
  }

  /**
   * realiza el consumo al servicios de las noticias acerca de las tecnologias
   */
  getNewsByTecnology( tecnology: string, page: number ): Observable<ResponseNew>{
    return this.http.get<ResponseNew>(`${ this.baseUrl }/search_by_date?query=${ tecnology  }&page=${ page }`);
  }

  /* CRUD de los favoritos */ 

  cargarFavoritos(): void{
    if (localStorage.getItem('favoritesHits')){
      this.newsByTecnologyLocalStorage = JSON.parse(localStorage.getItem('favoritesHits')  || '{}');
    }else{
      this.newsByTecnologyLocalStorage = [];
    }
  }

  guardarLocalStorage(): void{
    localStorage.setItem('favoritesHits', JSON.stringify(this.newsByTecnologyLocalStorage));
    this.cargarFavoritos();
  }

  agregarFavorito( hit: HitFavorite): void{
    this.newsByTecnologyLocalStorage.push(hit);
    this.guardarLocalStorage();
  }

  eliminarFavorito( story_id: number, author: string  ): void{
    this.newsByTecnologyLocalStorage = this.newsByTecnologyLocalStorage.filter( (hit: HitFavorite) => 
          hit.story_id !== story_id && hit.author !== author );
    this.guardarLocalStorage();
  }


  // Es utilizado para realizar la comparación de los favoritos por medio del pipe personalizado
  buscarFavorito( story_id: number, author: string ): HitFavorite {
      return this.newsByTecnologyLocalStorage.filter( (hit: HitFavorite) =>  
          hit.story_id === story_id && hit.author === author)[0];
  }

}

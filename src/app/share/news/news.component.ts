import { Component, Input, OnInit } from '@angular/core';
import { SearchByTecnologyService } from 'src/app/services/search-by-tecnology.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent{

    /**
     * Si se desea utilizar este componente hijo debe enviar los siguientes valores
     * de entrada que se espera para llenar mostrar en el componente
     */
    @Input() author: string = '';
    @Input() story_title: string = '';
    @Input() story_url: string = '';
    @Input() created_at: string = '';
    @Input() url: string = '';
    @Input() story_id: number = 0;

    constructor(
        private searchByTecnologyService: SearchByTecnologyService
    ) { }

    // Permite agregar un elemento al arreglo de localstorages de favoritos con
    // una estructura determinada
    addFavorite() {
        this.searchByTecnologyService.agregarFavorito({
          author: this.author, 
          story_title: this.story_title, 
          story_url: this.story_url, 
          created_at: this.created_at, 
          url: this.url, 
          story_id: this.story_id
        });
    }

    // Permite eliminar un elemento al arreglo de localstorages por medio del id
    removeFavorite() {
        this.searchByTecnologyService.eliminarFavorito(this.story_id, this.author);
    }

    // Permite realizar la navegacion en una pantalla externa a la url del elemento
    onNavigate() {
        if( this.story_url !== null ) {
            window.open( this.story_url, '_blank');
        }else {
            window.alert("Url does not exist");
        }
    }
}

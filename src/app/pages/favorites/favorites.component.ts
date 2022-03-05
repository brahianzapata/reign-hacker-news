import { Component, OnInit } from '@angular/core';
import { Hit, ResponseNew } from 'src/app/interface/reponse-news';
import { SearchByTecnologyService } from 'src/app/services/search-by-tecnology.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


    newsByTecnology: Hit[] = [];

    constructor( 
        public searchByTecnologyService: SearchByTecnologyService 
    ) {  }

    ngOnInit(): void {
    }

    getNewsFavorites() {
        this.searchByTecnologyService.cargarFavoritos();
    }

}

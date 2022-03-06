import { Component } from '@angular/core';
import { Hit} from 'src/app/interface/reponse-news';
import { SearchByTecnologyService } from 'src/app/services/search-by-tecnology.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent{

    /**
     * Al injectar el servicio podemos utilizar las variables publicas en nuestro HMTL
     */
    constructor( 
        public searchByTecnologyService: SearchByTecnologyService 
    ) {  }

}

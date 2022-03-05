import { Component, OnInit } from '@angular/core';
import { Hit, ResponseNew } from 'src/app/interface/reponse-news';
import { SearchByTecnologyService } from 'src/app/services/search-by-tecnology.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // Seleccionamos o iniciamos el valor '0' del <select>
    opcionSeleccionado: string  = '0';
    verSeleccion: string = '';
    datos : string[];
    newsByTecnology: Hit[] = [];
    pagination: number = 0;
    totalPages: number = 10;

    constructor( 
        private searchByTecnologyService: SearchByTecnologyService 
    ) { 
        this.datos = ['angular', 'reactjs', 'vuejs'];
    }

    ngOnInit(): void {
        this.getNewByTecnology();
    }

    getNewByTecnology() {
        
        // Pasamos el valor seleccionado a la variable verSeleccion
        this.verSeleccion = this.opcionSeleccionado;
        this.pagination = 0;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    getDataApi( typeTecnology: string, page: number ) {
        this.searchByTecnologyService.getNewsByTecnology(typeTecnology === '0' ? 'angular': typeTecnology  , page).subscribe( (resp: ResponseNew) => {
            this.newsByTecnology = resp.hits;
        }); 
    }

    changePage( page: number) {
        this.pagination = page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    changeAddPage( page: number) {
        this.pagination += page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    changeRemovePage( page: number ) {
        if( this.pagination === 0){
            return;
        }
        this.pagination += page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

}

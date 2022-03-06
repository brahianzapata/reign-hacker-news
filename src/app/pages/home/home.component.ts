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
    isLoading: boolean = false;

    constructor( 
        private searchByTecnologyService: SearchByTecnologyService 
    ) { 
        // Listado del combo box
        this.datos = ['angular', 'reactjs', 'vuejs'];
    }

    ngOnInit(): void {
        this.cargarChoose();
        this.getNewByTecnology();
    }

    cargarChoose(): void{
        if (localStorage.getItem('chooseTecnology')){
            this.opcionSeleccionado = localStorage.getItem('chooseTecnology')  || '';
        }else{
            this.opcionSeleccionado = '0';
        }
    }

    guardarLocalStorage(tecnology: string): void{
        localStorage.setItem('chooseTecnology', tecnology);
    }

    getNewByTecnology(guardar: boolean = false) {
        if(guardar === true ){
            this.guardarLocalStorage(this.opcionSeleccionado);
        }
        // Pasamos el valor seleccionado a la variable verSeleccion
        this.verSeleccion = this.opcionSeleccionado;
        this.pagination = 0;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    /**
     * Permite obtener elementos de una api de forma personalizado que lo pueda utilizar de diferentes maneras
     */
    getDataApi( typeTecnology: string, page: number ) {
        this.isLoading = true;
        this.searchByTecnologyService.getNewsByTecnology(typeTecnology === '0' ? 'angular': typeTecnology , page).subscribe( (resp: ResponseNew) => {
            this.newsByTecnology = resp.hits;
            this.isLoading = false;
        }); 
    }


    /**
     * Permite realizar la navegacion entre page utilizando el servicio getDataApi 
     */
    changePage( page: number) {
        this.pagination = page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    changeAddPage( page: number) {
        this.pagination += page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

    changeRemovePage( page: number ) {
        if( this.pagination === 0) return;
        this.pagination += page;
        this.getDataApi( this.verSeleccion, this.pagination );
    }

}

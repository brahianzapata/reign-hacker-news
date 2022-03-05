import { Pipe, PipeTransform } from '@angular/core';
import { SearchByTecnologyService } from '../services/search-by-tecnology.service';

@Pipe({
  name: 'favorite',
  pure: false
})
export class FavoritePipe implements PipeTransform {

  constructor(private searchByTecnologyService: SearchByTecnologyService){
  }

  transform(story_id: number, author: string): boolean {
    if (this.searchByTecnologyService.buscarFavorito(story_id, author) === undefined){
      return false;
    }else{
      return true;
    }  
  }

}

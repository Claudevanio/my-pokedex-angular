import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { pokemons } from '../pokemons';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of(pokemons);
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    const pokemon = pokemons.find(p => p.id === id);
    if (pokemon) {
      return of(pokemon);
    } else {
      return throwError(`Pokémon with id ${id} not found`);
    }
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    pokemons.push(pokemon);
    return of(pokemon);
  }

  updatePokemon(pokemon: Pokemon): void{
    const index = pokemons.findIndex(p => p.id === pokemon.id);
  if (index !== -1) {
    pokemons[index] = pokemon;
  }
  }

  deletePokemon(id: Number): void {
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id === id) {
        pokemons.splice(i, 1);
        break;
      }
    }
  }
}

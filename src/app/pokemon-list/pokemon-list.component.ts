import { Component } from '@angular/core';
import { pokemons } from '../pokemons';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemons = pokemons;

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  deletePokemon(id: number): void {
    const confirmDelete = confirm(
      'Tem certeza que deseja excluir este Pokémon?'
    );
    if (confirmDelete) {
      this.pokemonService.deletePokemon(id);
    }
  }
}

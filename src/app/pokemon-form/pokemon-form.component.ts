import { Component, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { pokemons } from '../pokemons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent {
  newPokemon: Pokemon = {
    name: '',
    id: 0,
    types: [],
  };
  selectedTypes: string[] = [];

  toppings = new FormControl('');

  toppingList: string[] = [
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
  ];

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
      if (!pokemon) {
        alert('O pokemon não foi encontrado');
        this.router.navigate(['/']);
      } else {
        this.newPokemon = pokemon;
        this.selectedTypes = pokemon.types;
      }
    });
  }

  onSelectionChangeTypes() {
    const selected = this.toppings.value ?? [];
    if (typeof selected === 'string') {
      this.newPokemon.types.push(selected);
    } else {
      this.newPokemon.types.push(selected[selected.length - 1]);
    }
  }

  createPokemon(): void {
    this.pokemonService.addPokemon(this.newPokemon).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  updatePokemon(): void {
    this.pokemonService.updatePokemon(this.newPokemon);
  }

  deletePokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.deletePokemon(id)
  }
}

import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'pokemon/:id', component: PokemonDetailComponent },
    {path: 'create', component: PokemonFormComponent },
    {path: 'edit/:id', component: PokemonFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
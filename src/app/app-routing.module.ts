import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokeDescriptionComponent } from './components/poke-description/poke-description.component';


const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'pokemons', component:PokemonesComponent
  },
  {
    path:'pokemons/:id', component:PokeDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

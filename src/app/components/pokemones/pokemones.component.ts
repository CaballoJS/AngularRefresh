import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {
  Pokemons:any=[];
  constructor(
    private PokeService:PokeApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllPokemons(); 
  }
getAllPokemons(){
  this.PokeService.getPokemons().subscribe(pokemons=>{
    console.log(pokemons);
    this.Pokemons=pokemons;

  })
}
showPoke(id){
this.router.navigateByUrl(`pokemons/${id}`)

}

}

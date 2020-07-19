import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PokeApiService} from '../../services/poke-api.service';
// import { pokeapi } from '../../../environments/pokeapi';


@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {
  Pokemon:any=[];
  constructor(
    private routeActive:ActivatedRoute,
    private PokeService:PokeApiService
  ) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.PokeService.getPokemon(id).subscribe(data => {
      this.Pokemon=data
      console.log(this.Pokemon);
    })
  }

}

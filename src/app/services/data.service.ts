import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getCharacters(){

    console.log('Petición HTTP realizada.')
    return this.http.get("https://rickandmortyapi.com/api/character")
  }


}

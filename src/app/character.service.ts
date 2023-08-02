import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseURL = "http://localhost:8080/api/v1/characters"
  constructor(private httpClient: HttpClient) { }

  //returns observable object
  getCharacter(): Observable<Character[]>{
    return this.httpClient.get<Character[]>(`${this.baseURL}`);
  }
}

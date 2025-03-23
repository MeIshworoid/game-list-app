import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Verification } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
private readonly apiUrl ='https://localhost:7278/api/Game'
  constructor(private http:HttpClient) { }

  getGames():Observable<Game[]>{
    return this.http.get<Game[]>('${this.apiUrl}/GetGames');
  }

  getVerifications():Observable<Verification[]>{
    return this.http.get<Verification[]>('${this.apiUrl}/GetVerification');
  }
}

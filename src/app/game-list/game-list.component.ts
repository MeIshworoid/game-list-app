import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Game, GameDetails, Verification } from '../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from '../service/game.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule,MatCardModule,MatTableModule,MatButtonModule,RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent implements OnInit {
  
  gameDetails: GameDetails = {
    gameReleaseDate: new Date(),
    gameSalesSheet: 'Game Sales Sheet',
    gameName: 'Awesome Game',
    initialReleaseVersion: 'v1.0.0',
    gameGenre: 'Action/Adventure'
}

 displayedGameColumns: string[] = ['gameName', 'gameTotalSales', 'actions'];
 gameDataSource = new MatTableDataSource<Game>();

 displayedVerificationColumns: string[] = ['action', 'signedBy', 'departmentDesignation', 'date'];
 verificationDataSource = new MatTableDataSource<Verification>();
 
 constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames()
    .subscribe({
      next:(games)=>{
        this.gameDataSource.data = games;
      },
      error:(err)=>{
        console.error('Error loading games:',err);
      }
    })

    this.gameService.getVerifications()
    .subscribe({
      next:(verifications)=>{
        this.verificationDataSource.data = verifications;
      },
      error:(err)=>{
        console.error('Error loading verifications:',err);
      }
    })
  }

  onPrint(): void {
    window.print();
  }

  onReject(): void {
    console.log('Game sales sheet rejected');
  }

  onVerify(): void {
    console.log('Game sales sheet verified');
  }

  viewGameDetails(game: Game): void {
    console.log('Viewing details for:', game);
  }

}

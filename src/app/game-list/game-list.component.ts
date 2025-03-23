import { Component, OnInit } from '@angular/core';
import { Game, GameDetails, Verification } from '../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule,MatCardModule,MatTableModule,MatButtonModule,RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  
  gameDetails: GameDetails = {
    gameReleaseDate: '2023-05-01',
    gameSalesSheet: 'Game Sales Sheet',
    gameName: 'Awesome Game',
    initialReleaseVersion: 'v1.0.0',
    gameGenre: 'Action/Adventure'
}

 displayedGameColumns: string[] = ['gameName', 'gameTotalSales', 'actions'];
 gameDataSource = new MatTableDataSource<Game>([
   { id: 1, gameName: 'Awesome Game', gameTotalSales: 1000000 },
   { id: 2, gameName: 'Super Game', gameTotalSales: 500000 },
   { id: 3, gameName: 'Mega Game', gameTotalSales: 750000 }
 ]);

 displayedVerificationColumns: string[] = ['action', 'signedBy', 'departmentDesignation', 'date'];
 verificationDataSource = new MatTableDataSource<Verification>([
   { action: 'Verified', signedBy: 'John Doe', departmentDesignation: 'QA/Tester', date: '2023-05-02' },
   { action: 'Verified', signedBy: 'Jane Smith', departmentDesignation: 'Manager', date: '2023-05-03' }
 ]);

  ngOnInit(): void {
    
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

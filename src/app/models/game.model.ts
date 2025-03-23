export interface GameDetails {
    gameReleaseDate: Date;         
    gameSalesSheet: string;          
    gameName: string;                
    initialReleaseVersion: string;   
    gameGenre: string;               
  }

  export interface Game {
    id: number;
    gameName: string;
    gameTotalSales: number;
  }

  export interface Verification {
    action: string;
    signedBy: string;
    departmentDesignation: string;
    date: Date;
  }
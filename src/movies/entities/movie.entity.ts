type Genres = 
  | "Comedy" 
  | "Something" 
  | "Went"
  | "Wrong"

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: Genres[]
}

export class PostMovieData {
  title: string;
  year: number;
  genres: Genres[]
}
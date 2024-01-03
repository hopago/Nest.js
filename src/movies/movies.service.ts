import { Injectable } from '@nestjs/common';
import { Movie, PostMovieData } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  createMovie(movieData: PostMovieData) {
    this.movies.push({
      id: Number(this.movies.length + 1),
      ...movieData,
    });

    return {
      status: 201,
      message: 'Movie created...',
    };
  }

  deleteMovieById(id: number) {
    this.movies.filter((movie) => movie.id !== id);

    return {
      status: 204,
      message: `Movie: ${id}, Deleted successfully...`,
    };
  }
}

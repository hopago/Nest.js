import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie, PostMovieData } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('search')
  getMovieBySearchTerm(@Query() searchTerm: string) {
    return `SearchTerm: ${searchTerm}`;
  }

  @Get(':id')
  getMovieById(@Param('id') movieId: number): Movie {
    return this.moviesService.getMovieById(movieId);
  }

  @Post()
  createMovie(@Body() movieData: PostMovieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteMovieById(movieId);
  }

  @Patch()
  updateTitle(@Param('id') movieId: number) {
    return `Update Title... ${movieId}`;
  }

  @Put()
  updateMovieInfo(@Param('id') movieId: number, @Body() updateData: any) {
    return `Update Movie Info... ${movieId}: ${JSON.parse(updateData)}`;
  }
}

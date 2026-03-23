import moviesData from '../data/movies.json';

const defaultSchedules = ['14:00', '16:30', '19:00', '21:30'];

export const getMovies = () => {
  return moviesData.map(movie => ({
    ...movie,
    schedules: defaultSchedules
  }));
};

export const getMovieById = (id) => {
  const movie = moviesData.find(m => m.id === parseInt(id));
  if (!movie) return null;
  return {
    ...movie,
    schedules: defaultSchedules
  };
};

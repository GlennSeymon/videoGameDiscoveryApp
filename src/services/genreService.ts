import apiClient from './api-client';
import { Genre } from '../hooks/useGenres';

const genreService = () => {
	return new apiClient<Genre>('genres');
};

export default genreService;

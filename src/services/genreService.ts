import apiClient from './api-client';
import { Genre } from '../entities/Genre';

const genreService = () => {
	return new apiClient<Genre>('genres');
};

export default genreService;

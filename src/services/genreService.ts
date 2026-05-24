import Genre from '../entities/Genre';
import apiClient from './api-client';

const genreService = () => {
	return new apiClient<Genre>('genres');
};

export default genreService;

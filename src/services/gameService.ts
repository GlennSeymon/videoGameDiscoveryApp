import APIClient from './api-client';
import { Game } from '../hooks/useGames';

const gameService = () => {
	return new APIClient<Game>('/games');
};

export default gameService;

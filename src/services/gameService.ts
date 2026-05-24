import { Game } from '../entities/Game';
import APIClient from './api-client';

const gameService = () => {
	return new APIClient<Game>('/games');
};

export default gameService;

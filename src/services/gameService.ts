import APIClient from './api-client';
import { Game } from '../entities/Game';

const gameService = () => {
	return new APIClient<Game>('/games');
};

export default gameService;

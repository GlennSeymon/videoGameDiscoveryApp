import Screenshot from '../entities/Screenshot';
import APIClient from './api-client';

const screenshotService = (gameId: number) => {
	return new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
};

export default screenshotService;

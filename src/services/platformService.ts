import APIClient from './api-client';
import { Platform } from '../hooks/usePlatforms';

const platformService = () => {
	return new APIClient<Platform>('/platforms/lists/parents');
};

export default platformService;

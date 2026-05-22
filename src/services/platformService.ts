import APIClient from './api-client';
import { Platform } from '../entities/Platform';

const platformService = () => {
	return new APIClient<Platform>('/platforms/lists/parents');
};

export default platformService;

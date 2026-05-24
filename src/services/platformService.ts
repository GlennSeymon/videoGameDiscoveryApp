import Platform from '../entities/Platform';
import APIClient from './api-client';

const platformService = () => {
	return new APIClient<Platform>('/platforms/lists/parents');
};

export default platformService;

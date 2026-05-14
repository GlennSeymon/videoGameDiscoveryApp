import useData from './useData';

export interface Platform {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	image: string;
}

const usePlatforms = () =>
	useData<Platform>('/platforms/lists/parents', {
		params: { ordering: 'name' },
	});

export default usePlatforms;

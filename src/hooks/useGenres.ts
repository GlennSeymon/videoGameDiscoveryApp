import useData from './useData';

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	description: string;
}

const useGenres = () =>
	useData<Genre>('/genres', { params: { ordering: 'name' } });

export default useGenres;

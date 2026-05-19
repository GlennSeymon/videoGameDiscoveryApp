import { CACHE_KEY_GENRES } from './constants';
import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import { AxiosError } from 'axios';

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	description: string;
}

const useGenres = () =>
	useQuery<FetchResponse<Genre>, AxiosError>({
		queryKey: CACHE_KEY_GENRES,
		queryFn: () =>
			apiClient
				.get<FetchResponse<Genre>>('/genres', {
					params: { ordering: 'name' },
				})
				.then((res) => res.data),
		staleTime: 60 * 1000, // 60 sec
	});
export default useGenres;

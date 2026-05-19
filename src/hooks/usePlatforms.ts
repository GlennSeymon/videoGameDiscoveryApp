import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import apiClient, { FetchResponse } from '../services/api-client';
import { CACHE_KEY_PLATFORMS } from './constants';

export interface Platform {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	image: string;
}

const usePlatforms = () =>
	useQuery<FetchResponse<Platform>, AxiosError>({
		queryKey: CACHE_KEY_PLATFORMS,
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>('/platforms/lists/parents', {
					params: { ordering: 'name' },
				})
				.then((res) => res.data),
		staleTime: 60 * 1000, // 60 sec
	});

export default usePlatforms;

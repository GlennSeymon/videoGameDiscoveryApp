import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import apiClient, { FetchResponse } from '../services/api-client';
import { CACHE_KEY_PLATFORMS } from './constants';
import platformService from '../services/platformService';

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
			platformService().getAll({
				params: { ordering: 'name' },
			}),
		staleTime: 60 * 1000, // 60 sec
	});

export default usePlatforms;

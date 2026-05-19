import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ms from 'ms';
import { FetchResponse } from '../services/api-client';
import platformService from '../services/platformService';
import { CACHE_KEY_PLATFORMS } from './constants';

export interface Platform {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	image: string;
}

export const usePlatforms = () =>
	useQuery<FetchResponse<Platform>, AxiosError>({
		queryKey: CACHE_KEY_PLATFORMS,
		queryFn: () =>
			platformService().getAll({
				params: { ordering: 'name' },
			}),
		staleTime: ms('1d'),
	});

export default usePlatforms;

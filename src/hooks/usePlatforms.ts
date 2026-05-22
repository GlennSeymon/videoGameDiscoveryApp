import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ms from 'ms';
import { FetchResponse } from '../services/api-client';
import platformService from '../services/platformService';
import { CACHE_KEY_PLATFORMS } from './constants';
import { Platform } from '../entities/Platform';

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

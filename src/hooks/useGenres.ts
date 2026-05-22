import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ms from 'ms';
import { FetchResponse } from '../services/api-client';
import genreService from '../services/genreService';
import { CACHE_KEY_GENRES } from './constants';
import { Genre } from '../entities/Genre';

export const useGenres = () =>
	useQuery<FetchResponse<Genre>, AxiosError>({
		queryKey: CACHE_KEY_GENRES,
		queryFn: () =>
			genreService().getAll({
				params: { ordering: 'name' },
			}),
		staleTime: ms('1d'),
	});

export default useGenres;

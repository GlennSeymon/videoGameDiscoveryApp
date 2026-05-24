import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ms from 'ms';
import Genre from '../entities/Genre';
import { FetchResponse } from '../services/api-client';
import genreService from '../services/genreService';
import { CACHE_KEY_GENRES } from './constants';

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

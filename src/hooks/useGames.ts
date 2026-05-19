import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GameQuery } from '../App';
import { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';
import gameService from '../services/gameService';

export interface Game {
	id: number;
	slug: string;
	name: string;
	description: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, AxiosError>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			gameService().getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.ordering,
					search: gameQuery.search,
				},
			}),
		staleTime: 60 * 1000, // 60 sec
	});

export default useGames;

import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ms from 'ms';
import { FetchResponse } from '../services/api-client';
import gameService from '../services/gameService';
import useGameQueryStore from '../state-management/game-query/GameQueryStore';
import { Platform } from './usePlatforms';

export interface Game {
	id: number;
	slug: string;
	name: string;
	description: string;
	description_raw: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, AxiosError>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			gameService().getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.ordering,
					search: gameQuery.search,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('1d'),
	});
};
export default useGames;

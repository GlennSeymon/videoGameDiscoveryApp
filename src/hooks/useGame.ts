import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService from '../services/gameService';

const useGame = (slug: string) => {
	return useQuery({
		queryKey: ['games', slug],
		queryFn: () => gameService().get(slug),
		staleTime: ms('1d'),
	});
};

export default useGame;

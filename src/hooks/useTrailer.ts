import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import trailerService from '../services/trailerService';

const useTrailer = (gameId: number) => {
	return useQuery({
		queryKey: ['trailer', gameId],
		queryFn: () => trailerService(gameId).getAll(),
		staleTime: ms('1d'),
	});
};

export default useTrailer;

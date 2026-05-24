import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import screenshotService from '../services/screenshotService';

const useScreenshot = (gameId: number) => {
	return useQuery({
		queryKey: ['screenshot', gameId],
		queryFn: () => screenshotService(gameId).getAll(),
		staleTime: ms('1d'),
	});
};

export default useScreenshot;

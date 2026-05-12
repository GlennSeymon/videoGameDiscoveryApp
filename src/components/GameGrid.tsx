import { Alert, CircularProgress } from '@mui/material';
import useGames from '../hooks/useGames';

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	return (
		<>
			{error && <Alert severity='error'>{error?.message}</Alert>}
			{isLoading && <CircularProgress />}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;

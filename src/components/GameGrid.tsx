import { Alert, Grid, styled } from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Alert severity='error'>{error.message}</Alert>}

			<Grid container spacing={2}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<Grid key={skeleton} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
							<GameCardSkeleton />
						</Grid>
					))}
				{data.map((game) => (
					<Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
						<GameCard game={game} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default GameGrid;

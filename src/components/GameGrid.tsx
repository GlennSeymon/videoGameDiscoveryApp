import { Alert, Grid, styled } from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const StyledGridContainer = styled(Grid)({
	padding: '1em',
});

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Alert severity='error'>{error?.message}</Alert>}

			<StyledGridContainer container spacing={2}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<Grid key={skeleton} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
							<GameCardSkeleton />
						</Grid>
					))}
				{games.map((game) => (
					<Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
						<GameCard game={game} />
					</Grid>
				))}
			</StyledGridContainer>
		</>
	);
};

export default GameGrid;

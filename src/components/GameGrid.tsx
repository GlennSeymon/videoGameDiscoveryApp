import { Alert, CircularProgress, Grid, styled } from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const StyledGridContainer = styled(Grid)({
	padding: '1em',
});

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	return (
		<>
			{error && <Alert severity='error'>{error?.message}</Alert>}
			{isLoading && <CircularProgress />}

			<StyledGridContainer container spacing={2}>
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

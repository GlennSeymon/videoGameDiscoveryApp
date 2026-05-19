import { Alert, Button, Grid, styled } from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';
import React from 'react';

interface Props {
	gameQuery: GameQuery;
}

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Alert severity='error'>{error.message}</Alert>;

	return (
		<>
			<Grid container spacing={2}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<Grid key={skeleton} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
							<GameCardSkeleton />
						</Grid>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
								<GameCard game={game} />
							</Grid>
						))}
					</React.Fragment>
				))}
			</Grid>
			{hasNextPage && (
				<StyledButton variant='contained' onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? 'Loading...' : 'Next Page'}
				</StyledButton>
			)}
		</>
	);
};

export default GameGrid;

import { Alert, CircularProgress, Grid, styled } from '@mui/material';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const StyledGrid = styled(Grid)(({ theme }) => ({
	margin: theme.spacing(2),
}));

const GameCardGrid = styled(Grid)(({ theme }) => ({
	'&:hover': {
		transform: 'scale(1.05)',
		boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
	},
	transition: 'all 0.5s ease',
	borderRadius: theme.spacing(2),
}));

const GameGrid = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Alert severity='error'>{error.message}</Alert>;

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<>
			<InfiniteScroll
				hasMore={!!hasNextPage}
				dataLength={fetchedGamesCount}
				next={() => void fetchNextPage()}
				loader={<CircularProgress />}
				style={{ overflow: 'hidden' }}
			>
				<StyledGrid container spacing={2}>
					{isLoading &&
						skeletons.map((skeleton) => (
							<Grid
								key={skeleton}
								size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
							>
								<GameCardSkeleton />
							</Grid>
						))}

					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardGrid
									key={game.id}
									size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
								>
									<GameCard game={game} />
								</GameCardGrid>
							))}
						</React.Fragment>
					))}
				</StyledGrid>
			</InfiniteScroll>
		</>
	);
};

export default GameGrid;

import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Grid,
	styled,
} from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } =
		useGames(gameQuery);
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
				<Grid container spacing={2}>
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
								<Grid
									key={game.id}
									size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
								>
									<GameCard game={game} />
								</Grid>
							))}
						</React.Fragment>
					))}
				</Grid>
			</InfiniteScroll>
		</>
	);
};

export default GameGrid;

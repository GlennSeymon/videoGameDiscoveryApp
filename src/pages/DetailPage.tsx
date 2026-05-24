import { CircularProgress, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import GameAttributes from '../components/GameAttributes';
import GameScreenshot from '../components/GameScreenshot';
import TextExpander from '../components/TextExpander';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const DetailPage = () => {
	const params = useParams();
	const { data: game, isLoading } = useGame(params.slug!);

	// if (errorGame || !game) throw error;
	if (isLoading) return <CircularProgress />;

	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 12, sm: 6 }}>
				<Typography variant='h1'>{game?.name}</Typography>
				<TextExpander minChars={100}>{game?.description_raw}</TextExpander>
				{game && <GameAttributes game={game} />}
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				{game && <GameTrailer gameId={game.id} />}
				{game && <GameScreenshot gameId={game.id} />}
			</Grid>
		</Grid>
	);
};

export default DetailPage;

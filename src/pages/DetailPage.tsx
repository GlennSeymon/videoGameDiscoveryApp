import { Box, CircularProgress, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import GameAttributes from '../components/GameAttributes';
import TextExpander from '../components/TextExpander';
import Trailer from '../components/Trailer';
import useGame from '../hooks/useGame';
import GameScreenshot from '../components/GameScreenshot';

const StyledBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
}));

const DetailPage = () => {
	const params = useParams();
	const { data: game, isLoading, error } = useGame(params.slug!);

	// if (errorGame || !game) throw error;
	if (isLoading) return <CircularProgress />;

	return (
		<StyledBox>
			<Typography variant='h1'>{game?.name}</Typography>
			<TextExpander minChars={100}>{game?.description_raw}</TextExpander>
			{game && <GameAttributes game={game} />}
			{game && <Trailer gameId={game.id} />}
			{game && <GameScreenshot gameId={game.id} />}
		</StyledBox>
	);
};

export default DetailPage;

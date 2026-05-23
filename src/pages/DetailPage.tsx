import { Box, CircularProgress, Grid, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import TextExpander from '../components/TextExpander';
import GridDefinitionItem from '../components/GridDefinitionItem';
import CriticScore from '../components/CriticScore';
import GameAttributes from '../components/GameAttributes';

const StyledBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
}));

const DetailPage = () => {
	const params = useParams();
	const { data: game, isLoading, error } = useGame(params.slug!);

	// if (error || !game) throw error;
	if (isLoading) return <CircularProgress />;

	return (
		<StyledBox>
			<Typography variant='h1'>{game?.name}</Typography>
			<TextExpander minChars={100}>{game?.description_raw}</TextExpander>
			{game && <GameAttributes game={game} />}
		</StyledBox>
	);
};

export default DetailPage;

import { Box, CircularProgress, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import TextExpander from '../components/TextExpander';

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
			<Typography>Rating: {game?.rating}</Typography>
			<Typography>Metacritic: {game?.metacritic}</Typography>
		</StyledBox>
	);
};

export default DetailPage;

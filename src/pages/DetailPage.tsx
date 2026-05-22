import { Box, CircularProgress, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const StyledBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
}));

const DetailPage = () => {
	const params = useParams();
	const { data: game, isLoading, error } = useGame(params.slug!);

	// if (error || !game) throw error;

	return (
		<StyledBox>
			{isLoading && <CircularProgress />}

			<Typography variant='h1'>DetailPage</Typography>
			<Typography>Name: {game?.name}</Typography>
			<Typography>Description RAW: {game?.description_raw}</Typography>
			<Typography>Rating: {game?.rating}</Typography>
			<Typography>Metacritic: {game?.metacritic}</Typography>
		</StyledBox>
	);
};

export default DetailPage;

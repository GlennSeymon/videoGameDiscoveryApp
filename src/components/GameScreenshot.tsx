import useScreenshot from '../hooks/useScreenshot';
import { CircularProgress, Grid, Stack } from '@mui/material';

interface Props {
	gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
	const { data: screenshots, isLoading, error } = useScreenshot(gameId);

	if (isLoading) return <CircularProgress />;
	if (!screenshots) return null;

	return (
		<Grid container spacing={2}>
			{screenshots.results.map((screenshot) => (
				<Grid size={{ xs: 12, sm: 6 }} key={screenshot.id}>
					<img src={screenshot.image} />
				</Grid>
			))}
		</Grid>
	);
};

export default GameScreenshot;

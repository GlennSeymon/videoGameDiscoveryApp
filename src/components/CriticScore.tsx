import { Rating, Stack, styled, Typography } from '@mui/material';

interface Props {
	score: number;
}

const ScoreLabel = styled(Typography)(({ theme }) => ({
	marginLeft: theme.spacing(0.5),
	marginRight: theme.spacing(1),
}));

const CriticScore = ({ score }: Props) => {
	return (
		<Stack direction={'row'}>
			<ScoreLabel>Score:</ScoreLabel>
			<Rating name='criticScore' defaultValue={score} size='small' readOnly />
		</Stack>
	);
};

export default CriticScore;

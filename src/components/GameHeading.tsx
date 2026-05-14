import { styled, Typography } from '@mui/material';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

const getHeading = (gameQuery: GameQuery): string => {
	return `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}`;
};

const StyledHeading = styled(Typography)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));

const GameHeading = ({ gameQuery }: Props) => {
	return (
		<StyledHeading variant='h1'>{getHeading(gameQuery)} Games</StyledHeading>
	);
};

export default GameHeading;

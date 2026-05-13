import { Skeleton, styled } from '@mui/material';
import GameCardContainer from './GameCardContainer';

const StyledSkeleton = styled(Skeleton)({
	height: '70%',
	width: '100%',
});

const GameCardSkeleton = () => {
	return (
		<GameCardContainer>
			<StyledSkeleton variant='rectangular'></StyledSkeleton>
		</GameCardContainer>
	);
};

export default GameCardSkeleton;

import { Card, CardContent, Skeleton, styled } from '@mui/material';

const StyledCardContent = styled(CardContent)({
	padding: 0,
	height: '15rem',
});

const StyledSkeleton = styled(Skeleton)({
	height: '70%',
	width: '100%',
	backgroundPosition: 'top',
});

const GameCardSkeleton = () => {
	return (
		<Card>
			<StyledCardContent>
				<StyledSkeleton variant='rectangular'></StyledSkeleton>
			</StyledCardContent>
		</Card>
	);
};

export default GameCardSkeleton;

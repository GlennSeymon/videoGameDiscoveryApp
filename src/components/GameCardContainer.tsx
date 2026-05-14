import { Card, CardContent, styled } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const StyledCardContent = styled(CardContent)({
	padding: 0,
	height: '18rem',
});

const GameCardContainer = ({ children }: Props) => {
	return (
		<Card>
			<StyledCardContent>{children}</StyledCardContent>
		</Card>
	);
};

export default GameCardContainer;

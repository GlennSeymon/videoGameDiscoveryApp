import { Grid, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const StyledGrid = styled(Grid)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));

const GridDefinitionItem = ({ term, children }: Props) => {
	return (
		<StyledGrid size={{ xs: 12, sm: 6 }}>
			<Typography component={'dt'} variant='h6'>
				{term}
			</Typography>
			<Typography component={'dd'}>{children}</Typography>
		</StyledGrid>
	);
};

export default GridDefinitionItem;

import { Button, Typography } from '@mui/material';
import { useState } from 'react';

interface Props {
	children: string | undefined;
	minChars: number;
}

const TextExpander = ({ children, minChars }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (!children) return null;

	if (children.length <= minChars) return <Typography>{children}</Typography>;

	return (
		<>
			<Typography>
				{isExpanded ? children : children.substring(0, minChars) + '...'}
			</Typography>
			<Button
				variant='contained'
				size='small'
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? 'Show Less' : 'Show More'}
			</Button>
		</>
	);
};

export default TextExpander;

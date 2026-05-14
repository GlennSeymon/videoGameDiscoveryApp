import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const OrderingTypes = [
	{ value: '-added', label: 'Date added' },
	{ value: 'name', label: 'Name' },
	{ value: '-released', label: 'Release date' },
	{ value: '-metacritic', label: 'Popularity' },
	{ value: '-rating', label: 'Average Rating' },
];

interface Props {
	onClickOrdering: (ordering: string) => void;
	selectedOrdering: string | null;
}

const OrderingSelector = ({ onClickOrdering, selectedOrdering }: Props) => {
	return (
		<FormControl sx={{ width: '30%' }}>
			<InputLabel id='orderingTypeLabel'>Sort Type</InputLabel>
			<Select
				labelId='orderingTypeLabel'
				label='Sort Type'
				value={selectedOrdering ?? ''}
			>
				{OrderingTypes.map((orderingType) => (
					<MenuItem
						onClick={() => onClickOrdering(orderingType.value)}
						key={orderingType.value}
						value={orderingType.value}
					>
						{orderingType.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default OrderingSelector;

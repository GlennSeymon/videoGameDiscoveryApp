import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useGameQueryStore from '../state-management/game-query/GameQueryStore';

const OrderingTypes = [
	{ value: '-added', label: 'Date added' },
	{ value: 'name', label: 'Name' },
	{ value: '-released', label: 'Release date' },
	{ value: '-metacritic', label: 'Popularity' },
	{ value: '-rating', label: 'Average Rating' },
];

const OrderingSelector = () => {
	const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
	const setOrdering = useGameQueryStore((s) => s.setOrdering);

	return (
		<FormControl sx={{ width: '30%' }}>
			<InputLabel id='orderingTypeLabel'>Sort Type</InputLabel>
			<Select
				labelId='orderingTypeLabel'
				label='Sort Type'
				value={ordering ?? ''}
			>
				{OrderingTypes.map((orderingType) => (
					<MenuItem
						onClick={() => setOrdering(orderingType.value)}
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

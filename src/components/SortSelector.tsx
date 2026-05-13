import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortTypes = [
	'Relevance, Date added',
	'Name',
	'Popularity',
	'Average Rating',
];

const SortSelector = () => {
	return (
		<FormControl sx={{ width: '30%' }}>
			<InputLabel id='sortTypeLabel'>Sort Type</InputLabel>
			<Select labelId='sortTypeLabel' label='Sort Type'>
				<MenuItem key='all' value='all'>
					All
				</MenuItem>
				{SortTypes.map((sortType) => (
					<MenuItem key={sortType} value={sortType}>
						{sortType}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SortSelector;

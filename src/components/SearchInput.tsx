import { InputAdornment, styled, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
	onSearch: (searchText: string) => void;
}

const StyledForm = styled('form')({
	width: '100%',
});

const SearchInput = ({ onSearch }: Props) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!searchValue.trim()) return;

		onSearch(searchValue);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<TextField
				label={'Search games'}
				onChange={(event) => {
					setSearchValue(event.target.value);
				}}
				fullWidth
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position='start'>
								{React.createElement(BsSearch)}
							</InputAdornment>
						),
					},
				}}
			/>
		</StyledForm>
	);
};

export default SearchInput;

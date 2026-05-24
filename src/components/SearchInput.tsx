import { InputAdornment, styled, TextField } from '@mui/material';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../state-management/game-query/GameQueryStore';

const StyledForm = styled('form')({
	width: '100%',
});

const SearchInput = () => {
	const setSearch = useGameQueryStore((s) => s.setSearch);
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!searchValue.trim()) return;

		setSearch(searchValue);
		navigate('/');
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

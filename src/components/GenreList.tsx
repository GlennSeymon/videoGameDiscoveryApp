import {
	Alert,
	CircularProgress,
	Link,
	List,
	ListItem,
	styled,
	Typography,
} from '@mui/material';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const StyledImage = styled('img')(({ theme }) => ({
	height: '32px',
	width: '32px',
	marginRight: theme.spacing(1),
	borderRadius: theme.spacing(1),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
	padding: 0,
	paddingBottom: theme.spacing(1),
}));

interface StyledLinkProps {
	isSelected: boolean;
}

const StyledLink = styled(Link, {
	shouldForwardProp: (prop) => prop !== 'isSelected',
})<StyledLinkProps>(({ isSelected }) => ({
	fontWeight: isSelected ? 'bold' : 'normal',
}));

interface Props {
	onClickGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onClickGenre, selectedGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (error) return <Alert severity='error'>{error.message}</Alert>;
	if (isLoading) return <CircularProgress />;

	return (
		<>
			<Typography variant='h6'>Genres</Typography>

			<List>
				{data.map((genre) => (
					<StyledListItem key={genre.id}>
						<StyledImage src={getCroppedImageUrl(genre.image_background)} />
						<StyledLink
							onClick={() => onClickGenre(genre)}
							isSelected={genre.id === selectedGenre?.id}
						>
							{genre.name}
						</StyledLink>
					</StyledListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;

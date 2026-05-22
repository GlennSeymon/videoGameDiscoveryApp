import { Alert, Typography } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<>
			<Alert color='error'>Oops...</Alert>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>{isRouteErrorResponse(error) ? error.data : ''}</p>
		</>
	);
};

export default ErrorPage;

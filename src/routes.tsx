import { createBrowserRouter } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import ListPage from './pages/ListPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,

		children: [
			{ path: '', element: <ListPage /> },
			{ path: 'game/:id', element: <DetailPage /> },
		],
	},
]);

export default router;

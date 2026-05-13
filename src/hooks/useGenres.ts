import { AxiosError, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	description: string;
}

interface FetchGenreResponse {
	count: number;
	next: string;
	previous: string;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchGenreResponse>('/genres', { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;

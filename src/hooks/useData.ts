import { AxiosError, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
	count: number;
	next: string;
	previous: string;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { data, error, isLoading };
};

export default useData;

import { AxiosError, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	slug: string;
	name: string;
	description: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
	count: number;
	next: string;
	previous: string;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<FetchGamesResponse>('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;

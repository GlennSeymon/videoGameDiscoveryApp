import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	ordering?: string | null;
	search?: string | null;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenre: (genreId: number) => void;
	setPlatform: (platformId: number) => void;
	setOrdering: (order: string) => void;
	setSearch: (search: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setGenre: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
	setPlatform: (platformId) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, platformId: platformId },
		})),
	setOrdering: (order) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, ordering: order } })),
	setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

if (process.env.NODE_ENV === 'development')
	mountStoreDevtool('GameQuery Store', useGameQueryStore);

export default useGameQueryStore;

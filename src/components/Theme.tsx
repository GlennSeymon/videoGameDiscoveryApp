// theme.tsx
import { createContext, useMemo, useState, ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '../theme';

interface Props {
	children: ReactNode;
}

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const AppThemeProvider = ({ children }: Props) => {
	const [mode, setMode] = useState<'light' | 'dark'>('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(() => getTheme(mode), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

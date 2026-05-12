import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
	palette: {
		mode,
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#9c27b0',
		},
		background: {
			default: mode === 'light' ? '#f4f6ff' : '#0a0f1f',
			paper: mode === 'light' ? '#ffffff' : '#121827',
		},
	},
	typography: {
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		h1: {
			fontSize: '2.5rem',
			fontWeight: 700,
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 600,
		},
		button: {
			textTransform: 'none',
		},
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 999,
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
	},
});

export const getTheme = (mode: 'light' | 'dark') =>
	createTheme(getDesignTokens(mode));

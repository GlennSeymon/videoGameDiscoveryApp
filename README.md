# Video Game Discovery App

A demo web application that helps users discover new video games based on their preferences, genres, and ratings. Built with modern web technologies for an intuitive and engaging experience.

This project was developed as part of the Code With Mosh Ultimate React course series, extended with additional features including MUI theming.

## Features

- Search for games by title, genre, or platform
- Sort games by relevance, rating, and other criteria
- View detailed game information including ratings, rating icons, and available platforms
- Responsive design for desktop and mobile devices using MUI
- Dark/Light mode theme
- Dynamic data and images via the [RAWG API](https://rawg.io/)
- Infinite scrolling
- State management using Zustand

## Technologies Used

- React
- TypeScript
- Node.js
- Material UI (MUI)
- Zustand (state management)
- React Query / TanStack Query (server state and caching)
- RAWG API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GlennSeymon/videoGameDiscoveryApp.git
   cd videoGameDiscoveryApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Add your RAWG API key to `src/services/api-client.ts`
   - A free API key is available at [rawg.io/apidocs](https://rawg.io/apidocs)

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

- Use the search bar to find games by title
- Filter by genre using the left sidebar
- Filter by platform using the top navigation
- Toggle between dark and light mode using the theme switch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

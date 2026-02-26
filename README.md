# .Flix - Smart TV Video Streaming Application

**.Flix** is a modern wev video streaming application that help the user to browse and watch the contents that they can watch on demand. It is specifically designed for Smart TVs and modern web browsers. It provides a smooth and clean browsing and watching experience using D-pad remote navigation and spatial focus management.

##  Overview

When launched, users are presented with a landing page that flows right into a Home Dashboard. To access the dashboard, the user needs to login through the built-in login page. The dashboard contains multiple rows of content, each row containing a list of movies or TV shows. Users can navigate through the rows and columns using the D-pad remote control. 

Clicking a thumbnail navigates the user to the details page of the movie or TV show. The details page displays the metadata of the movie or TV show such as title, description, cast, director, and genre of the movie or TV show.

##  Targeted Platforms
The application is strictly optimized and packaged for cross-platform Smart TV usage:
- **Web Browsers** (Chrome, Safari, Edge, Firefox)
- **Samsung Tizen TV** (Packaged as a `.wgt` build)
- **LG WebOS TV** (Packaged as an `.ipk` build)

##  Architecture & Middleware

This project relies on **Enlight middleware APIs** to handle backend heavy-lifting, specifically catering to:
- **Catalog Data**: Fetching dynamic content rails and movie lists
- **Metadata**: Retrieving deep-linked details (Cast, Genres, Directors)
- **Playback**: Video playback

##  Core Technical Features
- **Spatial Navigation**: Smart Navigation engine maps the remote's D-pad directly to the UI, ensuring that up, down, left, or right movements of the focus always lands exactly where you expect it to.(powered by `@noriginmedia/norigin-spatial-navigation`).
- **Magic Mouse Support**: Dedicated integration for LG Magic Mouse gyroscope controls.
- **TV Back-Navigation**: Handled history routing perfectly aligned with physical TV remote "Back/Return" buttons. Unified the navigation so the app responds to both web-based 'Back' commands (LG) and physical remote buttons (Samsung).

##  Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Pure Native CSS (Fluid variables & Flexbox)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Video Playback**: [Video.js](https://videojs.com/)
- **Analytics**: Mixpanel Browser & Loggly JS Logger


## Getting Started (Development)

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules. 

### Prerequisites
Make sure to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd ./Task
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server address provided by Vite (usually `http://localhost:5173`).

###  Scripts

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the TypeScript configurations and builds the production-ready static web bundle (usable for `.wgt` and `.ipk` packaging).


<!-- აპლიკაციის გეგმა  -->

src/
├── main.jsx
├── App.jsx # Routes + favorites state
├── layouts/
│ └── MainLayout.jsx # Header + Sidebar + <Outlet/> + Footer
├── components/
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Navbar.jsx
│ ├── Footer/Footer.jsx
│ ├── Sidebar/
│ │ ├── Sidebar.jsx
│ │ ├── SidebarSection.jsx
│ │ └── SidebarMovieItem.jsx
│ ├── MovieCard/MovieCard.jsx
│ ├── MovieGrid/MovieGrid.jsx
│ ├── FavoriteButton/FavoriteButton.jsx
│ └── ProgressBar/ProgressBar.jsx
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Favorites.jsx
│ ├── Contact.jsx
│ ├── MovieDetails.jsx
│ └── NotFound.jsx
└── data/
├── movies.js
├── continueWatching.js
└── navLinks.js

<!--
npm create vite@latest;
npm run dev;

 -->

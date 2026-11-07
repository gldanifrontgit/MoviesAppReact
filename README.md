# Movie App

React აპლიკაცია ფილმებისთვის. ამ ეტაპზე მუშაობს Mock data-ით, შემდეგ ეტაპზე დაუკავშირდება TMDB API-ს.

## ტექნოლოგიები

- React + Vite
- React Router (`createBrowserRouter`)
- Ant Design Icons (`@ant-design/icons`)

## პროექტის სტრუქტურა

```
src/
├── main.jsx                  # Router + render
├── App.jsx                   # Header + Sidebar + <Outlet/> + Footer, favorites state
├── App.css
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   ├── SidebarSection.jsx
│   │   └── SidebarMovieItem.jsx
│   ├── MovieCard/
│   │   └── MovieCard.jsx
│   ├── MovieGrid/
│   │   └── MovieGrid.jsx
│   ├── FavoriteButton/
│   │   └── FavoriteButton.jsx
│   └── ProgressBar/
│       └── ProgressBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Favorites.jsx
│   ├── Contact.jsx
│   ├── MovieDetails.jsx
│   └── NotFound.jsx
└── data/
    ├── movies.js
    ├── continueWatching.js
    └── navLinks.js
```

## გვერდები (Routes)

| Path         | გვერდი       |
| ------------ | ------------ |
| `/`          | Home         |
| `/about`     | About        |
| `/favorites` | Favorites    |
| `/contact`   | Contact      |
| `/movie/:id` | MovieDetails |
| `*`          | NotFound     |

## გაშვება

```bash
npm install
npm run dev
```

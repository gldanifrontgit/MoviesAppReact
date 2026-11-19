import { movies } from "../../data/movies";
import { continueWatching } from "../../data/continueWatching";
import { SidebarSection } from "./sidebarSection";
import { SidebarMovieItem } from "./sidebarMovieItem";

export const Sidebar = () => {
  // Best rated: sort a copy by rating (highest first) and take the top 4
  const bestRated = [...movies]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4);

  // Continue watching: find the full movie for each saved movieId
  const watching = continueWatching
    .map((item) => ({
      movie: movies.find((m) => m.id === item.movieId),
      progress: item.progress,
    }))
    .filter((item) => item.movie);

  return (
    <aside className="sidebar">
      <SidebarSection title="Best Rated">
        {bestRated.map((movie) => (
          <SidebarMovieItem key={movie.id} movie={movie} />
        ))}
      </SidebarSection>

      <SidebarSection title="Continue Watching">
        {watching.map(({ movie, progress }) => (
          <SidebarMovieItem key={movie.id} movie={movie} progress={progress} />
        ))}
      </SidebarSection>
    </aside>
  );
};

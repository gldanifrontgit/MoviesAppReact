import { movies } from "../../data/movies";

export const Sidebar = () => {
  const copy = [...movies];
  const sorted = copy.sort((a, b) => b.vote_average - a.vote_average);

  console.log(sorted, "sorted");
  return (
    <aside className="sidebar">
      <h3>Sidebar</h3>
    </aside>
  );
};

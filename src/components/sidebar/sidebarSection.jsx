export const SidebarSection = ({ title, children }) => {
  return (
    <section className="sidebar-section">
      <h3 className="sidebar-section-title">{title}</h3>
      <ul className="sidebar-list">{children}</ul>
    </section>
  );
};

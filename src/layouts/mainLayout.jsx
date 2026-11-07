import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/footer";
import { Sidebar } from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="wrapper-body">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

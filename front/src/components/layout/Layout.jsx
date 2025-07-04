import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ empresa }) {
  return (
    <>
      <Header empresa={empresa} />
      <Navbar empresa={empresa} />
      <Outlet />
      <Footer empresa={empresa} />
    </>
  );
}

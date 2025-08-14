import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ empresa, decoded }) {
  return (
    <>
      <Header empresa={empresa} />
      <Navbar empresa={empresa} decoded={decoded} />
      <Outlet />
      <Footer empresa={empresa} />
    </>
  );
}

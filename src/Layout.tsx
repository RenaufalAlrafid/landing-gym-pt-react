import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./HomePage/component/Footer";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

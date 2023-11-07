import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}
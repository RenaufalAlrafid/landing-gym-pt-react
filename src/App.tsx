import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./HomePage/HomePage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<HomePage></HomePage>} />
      <Route path="about" element={<div>About</div>} />
    </Route>
  )
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}


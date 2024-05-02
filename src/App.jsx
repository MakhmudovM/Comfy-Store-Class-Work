import { createBrowserRouter , RouterProvider ,  } from "react-router-dom"
import { About, Cart, Chekout, HomeLayout, Landing, Login, Products, Register, SingleProduct, Error, Orders } from "./pages"

//pages

export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing/>
        },
        {
          path:"/products",
          element: <Products/>
        },
        {
          path:"/product/:id",
          element:<SingleProduct/>
        },
        {
          path: "/cart",
          element:<Cart/>
        },
        {
          path:"/chekout",
          element:<Chekout/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/about",
          element: <About/>
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>,
      errorElement: <Error/>
    },
    {
      path:"/register",
      element:<Register/>,
      errorElement: <Error/>
    }
  ])
  return <RouterProvider router={routes}/>
}


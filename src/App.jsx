import { createBrowserRouter , RouterProvider ,  } from "react-router-dom"
import { ErrorElement } from "./components"
import { About, Cart, Chekout, HomeLayout, Landing, Login, Products, Register, SingleProduct, Error, Orders,  } from "./pages"
import { loader as LandingLoader } from "./pages/Landing"
import { loader as SingleProductLoader } from "./pages/SingleProduct"


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
          element: <Landing/>,
          errorElement:<ErrorElement/>,
          loader: LandingLoader ,
        },
        {
          path:"/products",
          element: <Products/>
        },
        {
          path:"/products/:id",
          element:<SingleProduct/>,
          loader: SingleProductLoader,
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


import { createBrowserRouter , Navigate, RouterProvider ,  } from "react-router-dom"
import { ErrorElement , ProtectRoutes } from "./components"

import { About, Cart, Chekout, HomeLayout, Landing, Login, Products, Register, SingleProduct, Error, Orders,  } from "./pages"

import { loader as LandingLoader } from "./pages/Landing"
import { loader as SingleProductLoader } from "./pages/SingleProduct"
import { loader as ProductsLoader } from "./pages/Products"

import {action as RegisterAction} from "./pages/Register"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig"
import { authReady, login } from "./features/user/userSlice"


export default function App() {
  const { user , authReadyState } = useSelector((state) => state.userState);
  const routes = createBrowserRouter([
    {
      path:"/",
      element:(
      <ProtectRoutes user={user}>
        <HomeLayout/>
      </ProtectRoutes>
      ),
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
          element: <Products/>,
          loader : ProductsLoader,
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
      element: user ? <Navigate to="/"/> : <Login/>,
      errorElement: <Error/>
    },
    {
      path:"/register",
      element: user ? <Navigate to="/"/> : <Register/>,
      errorElement: <Error/>,
      action: RegisterAction,
    }
  ])

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReady());
    })
  }, []);
  return <>{authReady && <RouterProvider router={routes}/>}</>
}


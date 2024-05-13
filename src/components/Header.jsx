import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

function Header() {
  const {user} = useSelector((state) => state.userState)
  return <header className="bg-neutral py-2 text-neutral-content">
    <div className="align-content flex justify-center sm:justify-end">
        <div className=" sm:justify-end">
            {/*USER*/}

            {/*LINKS*/}
            <div className="flex gap-x-6 justify-center items-center sm:justify-end">
                {!user &&  (<>
                  <Link to="/login" className="link link-hover text-xs sm:textsm">Sign in / Guest</Link>
                <Link to="/register" className="link link-hover text-xs sm:textsm">Create an Acount</Link></>)}

                {user && (
                  <>
                  <p>Hello , {user.displayName}</p>
                  <button className="btn btn-sm" onClick={() => signOut(auth)}>Logout</button>
                  </>
                )}
            </div>
        </div>
    </div>
  </header>
}

export default Header
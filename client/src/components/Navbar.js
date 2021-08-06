import React from 'react';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
// *toggle here is experimental at the moment - new push
const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className='flex-wrap flex-row justify-center bg-darkBlue text-black font-mono w-full justify-center py-5 font-mono p-8'>

      {window.location.pathname === "/me" ? <h2 className="text-center text-3xl p-7 font-landing text-red-300">Welcome To Your Profile Page!</h2> : ""} 

      <div className='flex justify-end items-center h-16 relative underline font-mono'> 

        <div>
          {Auth.loggedIn() ? (
            <>
              <div className='p-8 inline-block'>
                {window.location.pathname !== "/me" ? <Link to='/me' className='p-1.5 ml-16 mb-5 text-md font-mono text-white bg-blue-500 hover:bg-purple-700 rounded-lg'>
                Profile </Link> : ""}

                {window.location.pathname === "/" || window.location.pathname === "/search-recipes" || window.location.pathname === "/features" ? "" : 
                <Link className="text-md p-2 ml-2 md:ml-20 p-2 ml-16 text-md ml-10 font-mono text-white bg-blue-400 hover:bg-purple-700 rounded-lg" to='/features'>
                  About
                </Link>}

                {window.location.pathname === "/search-recipes" ? "" : 
                <Link className="no-underline ml-6 text-md p-2 font-mono m-2 text-base text-md text-white bg-green-400 hover:bg-purple-700 rounded-lg" to='/search-recipes'>
                  Search
                </Link> }

              {window.location.pathname === "/search-recipes" ? "" :
                <button className="btn btn-lg btn-light m-2 ml-4 font-mono text-base text-md text-white bg-red-400 hover:bg-purple-700 rounded-lg p-1" onClick={logout}>Sign out</button>
              }
              </div>
            </>
          ) : (
            <>
              {window.location.pathname === '/signin' ? <Link className="no-underline text-md p-2 font-mono m-2 text-base text-md text-white bg-green-400 hover:bg-purple-700 rounded-lg" to="/">
                Sign up
              </Link> : <Link className="no-underline text-md p-2 mr-6 font-mono m-2 text-base text-md text-white bg-green-400 hover:bg-purple-700 rounded-lg" to="/signin">
                Sign in
              </Link>}
              <Link className="text-md p-2 ml-2 md:ml-10 p-2 mr-3 text-md mr-10 font-mono text-white bg-blue-400 hover:bg-purple-700 rounded-lg" to='/features'>
                  About
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
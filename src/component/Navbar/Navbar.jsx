//  import Link from "next/link"

// const Navbar = () => {

//     //temporary data
//     const Isadmin = true;
//     const session = true;

//   return (
//     <div className="flex justify-between items-center">
//          <div className="logo text-3xl font-semibold">blogApp</div>

//          <div className="flex justify-center gap-7">
//             <Link href="/">Homepage</Link>
//             <Link href="/about">About</Link>
//             <Link href="/blog">Blog</Link>

//             {Isadmin && <Link href="/admin">Admin</Link>}

//          </div>

//          <div>
//          {
//              session ?(

//              <button className="rounded-lg border bg-blue-950 border-black p-1">Logout</button>
//              ) :
//             <button className="rounded-lg border bg-blue-950 border-black p-1">Login</button>

//          }
//          </div>

//     </div>
//   )
// }

// export default Navbar

// Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // Temporary data
  const IsAdmin = true;
  const session = true;

  // State for toggling the visibility of links on small screens
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row items-center bg-gray-500 p-4">
      <div className="logo text-3xl font-semibold text-white mb-4 md:mb-0">
        blogApp
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden absolute top-4 right-4">
        <button
          className="text-white flex flex-col"
          onClick={() => setShowLinks(!showLinks)}
        >
          {/* You can use an icon library or a custom icon here */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div
        className={`${
          showLinks ? "block" : "hidden"
        } md:flex justify-center gap-7 md:gap-0 mt-4 md:mt-0`}
      >
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>

        {IsAdmin && <Link href="/admin">Admin</Link>}
      </div>

      <div className="flex mt-4 md:mt-0">
        {session ? (
          <button className="rounded-lg border bg-blue-950 border-black p-1 text-white">
            Logout
          </button>
        ) : (
          <button className="rounded-lg border bg-blue-950 border-black p-1 text-white">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

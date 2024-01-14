// "use client";
// import Link from "next/link";

// const Navbar = () => {
//   //temporary data
//   const Isadmin = true;
//   const session = true;

//   return (
//     <div className="flex justify-between items-center">
//       <div className="logo text-3xl font-semibold">blogApp</div>

//       <div className="flex justify-center gap-7">
//         <Link href="/">Homepage</Link>
//         <Link href="/about">About</Link>
//         <Link href="/blog">Blog</Link>

//         {Isadmin && <Link href="/admin">Admin</Link>}
//       </div>

//       <div>
//         {session ? (
//           <button className="rounded-lg border bg-blue-950 border-black p-1">
//             Logout
//           </button>
//         ) : (
//           <button className="rounded-lg border bg-blue-950 border-black p-1">
//             Login
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// Navbar.js
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
    <div className="w-screen bg-gray-500  md:h-20 md:p-2   sticky top-0 ">
      <div className="logo text-3xl  md:flex    lg:text-3xl font-semibold text-white mb-4 sm:text-xl sm:p-3   md:text-2xl ">
        blogApp
        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden sm:float-right ">
          <button
            className="text-white flex flex-col "
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
            showLinks
              ? "flex flex-col items-center md:flex-row md:items-start"
              : "hidden"
          } md:flex justify-center gap-10 w-full sm:text-white sm-z-10 md:text-xl font-light lg:text-2xl    `}
        >
          <Link className="hover:text-pink-700" href="/">
            Homepage
          </Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>

          {IsAdmin && <Link href="/admin">Admin</Link>}
        </div>
        <div className="flex mt-4 md:mt-0 text-sm w-full md:w-auto   ">
          {session ? (
            <button className="rounded-lg border bg-blue-950 border-black p-1 text-white w-full md:w-auto  ">
              Logout
            </button>
          ) : (
            <button className="rounded-lg border bg-blue-950 border-black p-1 text-white w-full md:w-auto ">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

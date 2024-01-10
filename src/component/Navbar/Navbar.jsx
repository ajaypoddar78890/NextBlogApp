 import Link from "next/link"

const Navbar = () => {

    //temporary data
    const Isadmin = true;
    const session = true;
    
  return (
    <div className="flex justify-between items-center">
         <div className="logo text-3xl font-semibold">blogApp</div>


         <div className="flex justify-center gap-7">
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>

                
                 
            {Isadmin && <Link href="/admin">Admin</Link>}
           
         </div>

         <div>
         {
             session ?(

             <button className="rounded-lg border bg-blue-950 border-black p-1">Logout</button>
             ) :
            <button className="rounded-lg border bg-blue-950 border-black p-1">Login</button>

         }
         </div> 
              
     

    </div>
  )
}

export default Navbar

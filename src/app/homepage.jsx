import Image from "next/image";

const homepage = () => {
  return (
    <div className="bg-gray-500  w-screen h-screen  md:grid md:grid-cols-2 sm:grid sm:grid-cols-1  sm:w-screen  sm:h-screen lg:h-screen lg:w-screen">
      <div className="banner  b-green-800   sm:h-full sm:pr-20  ">
        <Image
          className="w-3/4 h-3/4 ml-20 mt-10 aspect-auto     md:aspect-auto lg:w-3/4 lg:h-3/4 "
          src={"/homepage.png"}
          alt="banner"
          width={500}
          height={500}
        />
      </div>
      <div className="dataprovide b-red-900  sm:h-full ">
        <div className="titile  m-10 text-white font-serif  ">
          <h1 className="font-extrabold  text-wrap  sm:text-3xl md:text-4xl lg:text-5xl  xxl:text-6xl ">
            Where knowledge <br /> Comes
          </h1>
        </div>
        <div className="sub_title  text-white font-sans leading-8  text-2xl text-left mx-10 text-wrap  sm:text-xl sm:mt-1 md:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          molestias animi iusto dignissimos voluptate fuga fugiat sed inventore
          voluptatum deleniti id consequuntur at, numquam amet velit alias
          laudantium itaque debitis.
        </div>
        <div className="form_newslater   border border-black rounded-md b-yellow-500 ml-10 mt-10 w-full  text-white sm:w-3/4 sm:h-8 sm:mt-5  sm:flex sm:my-10 md:mt-12  lg:h-10 ">
          <input
            className=" w-3/4 h-full md:w-full  "
            type="text"
            name=""
            id=""
            placeholder="Gmail.com"
            style={{
              paddingLeft: "20px",
              color: "black",
              borderRadius: "2px",
            }}
          />
          <button className="newsletter   w-1/5 h-2/3  bg-blue-950   ml-2 sm:mt-2 sm:w-full sm:rounded-sm sm:text-sm ">
            {" "}
            NewsLetter
          </button>
          <button className="blogs    ml-5 w-1/6 h-2/3  bg-blue-950  sm:mt-2 sm:w-full sm:rounded-sm sm:text-sm  sm:mr-2      ">
            Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default homepage;

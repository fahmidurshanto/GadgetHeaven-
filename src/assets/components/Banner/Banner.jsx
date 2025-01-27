import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#9538E2] text-white relative">
        <h1 className="text-5xl font-bold pt-12 text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className=" py-10 text-center">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="bg-white text-[#9538E2] font-semibold px-8 py-3 rounded-full mb-52">
          Shop Now
        </button>
      <div className=" border-2 border-white w-1/2 mx-auto absolute -bottom-[30%] mt-28 rounded-4xl hidden lg:block">
        <img src={bannerImg} className="p-5 h-80 w-full rounded-4xl" />
      </div>
      </div>
    </>
  );
};

export default Banner;

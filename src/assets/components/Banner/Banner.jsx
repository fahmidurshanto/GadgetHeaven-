import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#9538E2] text-white relative">
            <h1 className="text-5xl font-bold pt-12 text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className=" py-10 text-center">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="bg-white text-[#9538E2] font-semibold px-8 py-3 rounded-full mb-52">Shop Now</button>
            </div>
            <img className="w-3/4 h-64 mx-auto bottom-1 absolute m-5 border border-white " src={bannerImg} />
        </>
    );
};

export default Banner;
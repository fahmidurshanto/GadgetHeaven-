import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-10 bg-[#9538E2] text-white">
            <Link to="/"><h3 className="text-3xl font-semibold">GadgetHeaven✨</h3></Link>
            <div className="flex justify-around items-center gap-5">
                <NavLink className="text-xl font-semibold" to="/">Home</NavLink>
                <NavLink className="text-xl font-semibold" to="/dashboard">Dashboard</NavLink>
                <NavLink className="text-xl font-semibold" to="/stats">Stats</NavLink>
            </div>
            <div className="flex justify-around items-center gap-5 text-xl text-black">
                <div className="bg-white p-2 cursor-pointer rounded-full">
                <BsCart3/>
                </div>
                <div className="bg-white p-2 cursor-pointer rounded-full">
                <FaRegHeart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
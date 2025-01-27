import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                    <h2 className="text-3xl font-bold mt-48 text-center">Explore Cutting-Edge Gadgets</h2>
                
            </div>
            <div className="flex items-center mt-10 relative">
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;
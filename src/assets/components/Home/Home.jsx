import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex items-center">
                <Categories></Categories>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;
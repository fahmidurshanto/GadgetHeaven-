
const Categories = () => {
    return (
        <div className="mt-48 p-10 flex-none flex-col gap-5">
            {/* gadgets, such as computers, phones, smart watches, chargers, and power
banks. C */}
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Gadgets</li>
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Computers</li>
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Phones</li>
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Smart Watches</li>
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Chargers</li>
            <li className="text-xl font-semibold px-8 py-3 list-none bg-linear-to-t from-gray-300 to-white shadow-md rounded-md mb-3 cursor-pointer hover:text-amber-700">Power Banks</li>
        </div>
    );
};

export default Categories;
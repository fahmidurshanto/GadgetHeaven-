
const Footer = () => {
    return (
        <div className="text-center space-y-5 p-16">
            <h3 className="text-3xl font-bold">Gadget Heaven</h3>
            <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            <div className="flex justify-around items-center">
                <div>
                    <h2 className="text-xl font-bold">Services</h2>
                    <li className="text-gray-600 list-none">Product Support</li>
                    <li className="text-gray-600 list-none">Order Tracking</li>
                    <li className="text-gray-600 list-none">Shipping & Delivery</li>
       
                </div>
                <div>
                <h2 className="text-xl font-bold">Company</h2>
                    <li className="text-gray-600 list-none">About Us Support</li>
                    <li className="text-gray-600 list-none">Careers</li>
                    <li className="text-gray-600 list-none">Contact</li>
                </div>
                <div>
                <h2 className="text-xl font-bold">Legal</h2>
                    <li className="text-gray-600 list-none">Terms of Service</li>
                    <li className="text-gray-600 list-none">Privacy Policy</li>
                    <li className="text-gray-600 list-none">Cookie Policy</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;
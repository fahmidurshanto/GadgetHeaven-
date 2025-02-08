import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
  // Company details for Gadget Heaven
  const companyDetails = {
    name: 'Gadget Heaven',
    description: 'Welcome to Gadget Heaven, your ultimate destination for the latest and greatest in tech. Explore our wide range of computers, laptops, cameras, electronic accessories, and smartphones.',
    address: '456 Gadget Lane, Tech City, CA 94025',
    email: 'support@gadgetheaven.com',
    phone: '+1 (800) 987-6543',
  };

  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
        <Helmet>
        <title>Blogs | Gadget Heaven</title>
        </Helmet>
      {/* Company Details Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{companyDetails.name}</h1>
        <p className="text-gray-600 mb-4">{companyDetails.description}</p>
        <div className="text-gray-600">
          <p><strong>Address:</strong> {companyDetails.address}</p>
          <p><strong>Email:</strong> {companyDetails.email}</p>
          <p><strong>Phone:</strong> {companyDetails.phone}</p>
        </div>
      </div>

      {/* Blog Posts Section */}
      {
        useEffect(()=>{
            fetch("blogs.json")
            .then((res => res.json()))
            .then(data => setBlogPosts(data))
        })
      }
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{post.category}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
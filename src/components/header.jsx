import React from 'react';
import { Link, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate() 
  const categories = ['Politics', 'Technology', 'Sports', 'Business', 'Health'];
  
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-red-500 tracking-tighter uppercase">Global News</h1>
        
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {categories.map(cat => (
              <>
              {/* <Link to={``}> */}
            <span key={cat} onClick={()=>navigate(`/news/${cat}`)}  className="hover:text-red-600 transition">{cat}</span>
            {/* </Link> */}
              </>
          ))}
        </nav>

        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
          <input type="text" placeholder="Search news..." className="bg-transparent outline-none text-sm p-1" />
          <button className="text-gray-500">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
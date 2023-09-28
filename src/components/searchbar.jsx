import React from 'react';
import search from '../assets/images/search.svg'
const   Searchbar = ({toggleState, name, setName, fetchUsers}) => {
  return (
 <div className="searchbar mt-10 flex py-[.6rem] px-2 rounded-[1rem] justify-between lg:gap-2 lg:px-4" style={{background: !toggleState && '#fefefe'}}>
  <div className="flex items-center lg:gap-40 sm:gap-20">
    <img src={search} alt="search" className="w-4 h-4 lg:w-6 lg:h-6 sm:w-5 sm:h-5" style={{color: !toggleState && '0079ff'}}/>
    <input
      type="text"
      placeholder="Search GitHub usern…"
      className={toggleState ? "border-0 rounded-md py-1 px-2 sm:px-5 focus:outline-none focus:border-blue-500 bg-transparent text-[.8rem] placeholder-white font-thin lg:text-xl" : 'border-0 rounded-md py-1 px-2 focus:outline-none focus:border-blue-500 bg-transparent text-[.8rem] placeholder-gray-400 text-gray-400 font-thin lg:text-xl'}
      value={name}
      onChange={(e) => setName(e.target.value)}  
    />
  </div>
  <div className="">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-[.4rem] px-[.4rem] rounded-md lg:py-3 lg:px-3 lg:text-xl" onClick={fetchUsers}>
      Search
    </button>
  </div>
</div>
  );
}

export default Searchbar;

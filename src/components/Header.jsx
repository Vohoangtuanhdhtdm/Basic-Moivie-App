import PropType from "prop-types";
import { useState } from "react";
const Header = ({ onSearch }) => {
  const [textSearch, setSearch] = useState("");
  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <h1 className="text-red-700 text-[40px] font-bold uppercase ">movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="text-black p-3"
          onChange={(e) => setSearch(e.target.value)}
          value={textSearch}
        />
        <button
          className="text-white p-2 bg-red-600 rounded-lg"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Header.propTypes = { onSearch: PropType.func };

export default Header;

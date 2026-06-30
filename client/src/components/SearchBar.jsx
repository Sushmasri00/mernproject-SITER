import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholder = "Search...", value, onChange }) {
  return (
    <div className="search">
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
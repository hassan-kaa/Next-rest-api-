import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
function Search() {
  let navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const updateSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchText, { replace: true });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="bg-black rounded-lg w-[80%] p-2 flex items-center justify-between font-light text-sm text-white "
    >
      <GoSearch />
      <input
        onChange={(e) => {
          updateSearch(e);
        }}
        placeholder="Search for your recipe"
        type="text"
        name="Recipe"
        id=""
        className="ml-3 flex-1 border-none bg-transparent text-white outline-none "
      />
    </form>
  );
}

export default Search;

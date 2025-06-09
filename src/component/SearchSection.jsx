import logo from "../images/bragosiLogo2 (2).png"
import { useState } from "react"

const SearchSection = ({ onSearchChange }) => {

    const [searchValue, setSearchValue ]= useState (null)

    const handleSubmitSearch = ()=>{
        if (searchValue.trim() === "") return;
        onSearchChange(searchValue)
        setSearchValue("")
    }

  return (
    <section className="flex flex-row w-full justify-center items-center gap-3 pt-4">
        <div>
            <img src={logo} alt="logo" width={50} height={30} />
        </div>
        <div className="w-4/5 flex flex-row gap-4">
            <input
            type="text"
            value={searchValue}
            placeholder="Search for city"
            className="relative border-2 w-full border-purple rounded-md p-2 outline-purple-dark"
            onChange={((e)=> setSearchValue(e.target.value))}/>

            <button 
            className="border p-2 rounded-md text-white bg-purple-muted hover:bg-purple-dark font-bold"
            onChange={handleSubmitSearch}>
                Search
            </button>

        </div>
    </section>
  )}

export default SearchSection
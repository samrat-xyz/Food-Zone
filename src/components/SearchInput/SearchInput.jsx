"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function SearchInput() {
  const params = useSearchParams();
  const router = useRouter();
    const handleSearch = (e) =>{
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value;
        // console.log(searchValue)
        // ---------------------------------
        // creating new search perameter
        const newParams = new URLSearchParams(params.toString());
        // set query
        newParams.set("search",searchValue)

        // navigate seach perameter route
        router.push(`?=${newParams.toString()}`)
    }
  return (
    <div className="w-full flex justify-center">
      <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-full px-3 py-2 shadow-sm w-full max-w-md">
        <input
        name="search"
          type="text"
          placeholder="Search food..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
        />
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchInput;

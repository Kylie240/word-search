import React, { useState } from 'react'

const SearchBar = ({handleSearch}) => {
    const [searchValue , setSearchValue] = useState("")
    const [theme , setTheme] = useState(true)

    function handleSubmit (e) {
        e.preventDefault()
        handleSearch(searchValue)
        setSearchValue("")
    }

  return (
    <div className='header flex justify-center'>
        <div className='search-container bg-greyColor rounded-lg py-8 md:py-10 w-screen lg:w-[85%] max-w-[900px] flex flex-col gap-8 justify-center items-center'>
                <form onSubmit={(e) => handleSubmit(e)} className='bg-white shadow-md p-6 rounded-lg flex justify-between gap-2 h-24 w-[95%]'>
                    <div className='search-input flex items-center'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input 
                            type="text" 
                            placeholder='search' 
                            className='search-bar w-full ml-4'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            />
                    </div>
                    <button type='submit' className='submit-btn bg-blueColor p-2'>Search</button>
                </form>
                <div className='flex flex-wrap justify-center w-4/5'>
                    <div className='w-1/3 flex justify-between'>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default SearchBar
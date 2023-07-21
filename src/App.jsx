import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Footer from './components/Footer'
import { API_URL, apiOptions } from './api'
import DayWord from './components/DayWord'
import RandomWord from './components/RandomWord'

const App = () => {

  const [wordData , setWordData] = useState(null)

    const handleSearch = async (searchValue) => {
        try {
            const response = await fetch(`${API_URL}${searchValue}`)
            .then(response => response.json())
            setWordData(response)
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <Navbar />
      <SearchBar handleSearch={handleSearch} />
      <RandomWord handleSearch={handleSearch} />
      {wordData && <Results data={wordData} handleSearch={handleSearch}/>}
      <DayWord />
      <Footer />
    </>
  )
}

export default App
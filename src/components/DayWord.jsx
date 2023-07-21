import React, { useEffect, useState } from 'react'
import { generate, count } from "random-words"
import { API_URL, apiOptions } from '../api'

const DayWord = () => {
  const [word, setWord] = useState(generate())
  const [wordData, setWordData] = useState()
  const [toggleModal, setToggleModal] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
            const response = await fetch(`${API_URL}hire`)
            .then(response => response.json())
            console.log(response);
            setWordData(response)
      } catch (error) {
            console.error(error);
      }
      loadData()
    }
  }, [])  

    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const currentMonth = months[date.getMonth()]
    const currentDay = date.getDate()
    const currentYear = date.getFullYear()
  console.log(wordData);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='cursor-pointer flex justify-center items-center gap-2 m-8' onClick={() => setToggleModal(!toggleModal)}>
        <h3 className='font-bold text-xl'>WORD OF THE DAY</h3>
        {toggleModal ? <i class="fa-solid fa-chevron-up"></i> :
          <i class="fa-solid fa-chevron-down"></i>}
      </div>
      {toggleModal && <div className='bg-blueColor rounded-xl p-4 flex flex-col justify-center items-center'>
        <div className='bg-white rounded-xl p-4 flex flex-col gap-4'>
          <div>
            <h2 className='font-bold text-blueColor text-3xl'>{word}</h2>
            <div className='flex justify-start gap-2 items-center'>
              <p className='text-textColor'></p>
              <i class="fa-solid fa-volume-high"></i>
            </div>
          </div>
          <div>
            <p className='text-black font-medium'>definition:</p>
            <p className='text-textColor'></p>
          </div>
          <p className='flex justify-end font-semibold'>{currentMonth} {currentDay}, {currentYear}</p>
        </div>
      </div>}
    </div>
  )
}

export default DayWord
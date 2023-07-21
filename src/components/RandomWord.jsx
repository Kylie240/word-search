import React, { useState } from 'react'
import { generate, count } from "random-words"

const RandomWord = ({handleSearch}) => {
    const [wordArr, setWordArr] = useState(generate(6))

    console.log(wordArr);
  return (
    <div className='p-8 gap-4 flex flex-wrap flex-col justify-start items-center'>
        <h4 className='text-center'>Don't know what to search? Try these examples:</h4>
        <div className='flex flex-wrap justify-center items-center p-4 gap-6'>
            {wordArr.map((word, index) => (
                <p key={index} 
                    className='p-2 bg-blue border-4 cursor-pointer rounded-lg text-lg border-blueColor hover:text-white hover:bg-blue-300'
                    onClick={() => handleSearch(word)}
                    >{word}</p>
            ))}

        </div>
    </div>
  )
}

export default RandomWord
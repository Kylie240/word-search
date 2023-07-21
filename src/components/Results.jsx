import React, { useState } from 'react'

const Results = ({data, handleSearch}) => {
    const [showExamples, setShowExamples] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)
    const [showSpeech, setShowSpeech] = useState(false)

    console.log(data);

  return (
    <div className='flex w-screen flex-col justify-center items-center p-8'>
        
        <h1 className='text-4xl font-bold p-8'>Results</h1>
            <div className= "bg-greyColor rounded-lg flex flex-col gap-8 justify-center items-center w-screen p-8 shadow-inner">
        
                <div className='bg-white w-auto p-4 gap-4 rounded-lg flex flex-wrap justify-center items-center'>
                    <h5 className='text-textColor text-2xl'>View:</h5>
                    <button onClick={() => setShowSynonyms(!showSynonyms)} data-id="synonyms" className='p-2'>Synonyms</button>
                    <button onClick={() => setShowSpeech(!showSpeech)} data-id="speach" className='p-2'>Part Of Speach</button>
                    <button onClick={() => setShowExamples(!showExamples)} data-id="examples" className='p-2'>Examples</button>
                </div>

                <div className='bg-white rounded-lg p-8 px-8 w-[95%] max-w-[1000px]'>
                    <div className='flex flex-wrap justify-start items-end gap-2'>
                        <h1 className="font-bold text-5xl my-2">{data[0].word}</h1>
                        <div className='flex gap-1 relative bottom-2'>
                        <p className='relative bottom-1'>{data[0].phonetic}</p>
                            <i class="fa-solid fa-volume-high"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    {data.map((response) => (
                        <div>
                            {response.meanings.map((meaning) => (
                                <div className='mb-8'>
                                    {showSpeech && <p className='relative bg-blueColor flex justify-center w-12 p-[2px] text-white'>{meaning.partOfSpeech}</p>}
                                    {meaning.definitions.map((definition, index) => (
                                        <div>
                                            <div className='flex gap-1 py-2 text-xl'>
                                                <p>{index+1}. </p>
                                                <div className='definition text-textColor'>{definition.definition}</div>
                                            </div>
                                            {definition.example && showExamples &&
                                                <div className='flex relative items-center left-4 gap-1 p-2'>
                                                    <span className='text-blueColor font-bold'>ex</span>
                                                    <p className='example left-2 border-l-4 pl-1 border-blueColor '>{definition.example}</p>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                    {showSynonyms && meaning.synonyms.length > 0  ?
                                        <div className='flex flex-wrap gap-2 text-xl py-2'>
                                            <span className='text-blueColor font-semibold'>- Synonym{meaning.synonyms.length > 1 ? "s:" : ":"}</span>
                                            {meaning.synonyms.map((synonym) => (
                                                <p className='hover:text-blueColor cursor-pointer flex gap-2'
                                                    onClick={() => handleSearch(synonym)}
                                                >{synonym}</p>
                                            ))}
                                        </div> : ""
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Results
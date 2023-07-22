import React, { useState } from 'react'

const Results = ({data, handleSearch}) => {
    const [showExamples, setShowExamples] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)
    const [showSpeech, setShowSpeech] = useState(false)
    const [saves, setSaves] = useState([])

    function handleSave () {
        console.log(data[0].word);
        if (saves.includes(data[0].word)){
            alert("Word already saved")
        } else {
            setSaves(saves => [...saves, data[0].word]);
        }
        console.log(saves);
    }

    function removeSave (save) {
        const newArr = saves.filter( function (item) {
            return item !== save
        })
        setSaves(newArr);
    }

    function sound () {
        sound.setA
    }

  return (
    <div className='flex w-screen flex-col justify-center items-center p-8'>
        
        <h1 className='text-4xl font-bold p-8'>Results</h1>
            {data === "word not found" ?
            <div className='flex flex-col items-center'>
                <h3 className='text-blueColor text-6xl font-bold'>UH OH!</h3>
                <p className='text-2xl'>word not found</p>
            </div> :
            <div className= "bg-greyColor rounded-lg flex flex-col gap-8 justify-center items-center w-screen p-8 shadow-inner">
        
                <div className='bg-white w-auto p-4 gap-4 rounded-lg flex flex-wrap justify-center items-center'>
                    <h5 className='text-textColor text-2xl'>View:</h5>
                    <button onClick={() => setShowSynonyms(!showSynonyms)} data-id="synonyms" className='p-2'>Synonyms</button>
                    <button onClick={() => setShowSpeech(!showSpeech)} data-id="speach" className='p-2'>Part Of Speach</button>
                    <button onClick={() => setShowExamples(!showExamples)} data-id="examples" className='p-2'>Examples</button>
                </div>
                    {saves.length > 0 ?
                        <div className='bg-white w-auto p-4 gap-4 rounded-lg flex flex-wrap justify-center items-center'>
                            <div className='flex flex-col'>
                                <h3 className='text-blueColor font-bold text-2xl mb-2'>Saved Words:</h3>
                                {saves.map((save) => (
                                    <div className='flex justify-center items-center gap-2'>
                                        <p className='text-textColor'>{save}</p>
                                        <i class="fa-regular fa-square-minus cursor-pointer"
                                        onClick={() => removeSave(save)}></i>                            
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <p className='hidden'>no saves yet</p>
                    }

                <div className='bg-white flex flex-col justify-start rounded-lg p-8 px-8 w-[95%] max-w-[1000px]'>
                    <div className='flex flex-wrap justify-start items-end gap-3'>
                        <h1 className="font-bold text-5xl my-2">{data[0].word}</h1>
                        <div className='flex gap-3 relative bottom-1'>
                            <p className='relative bottom-1'>{data[0].phonetic}</p>
                            <i class="fa-solid fa-volume-high relative fa-md cursor-pointer"
                                onClick={sound}
                            ></i>
                            { saves.includes(data[0].word) ?
                                <i class="fa-solid fa-star fa-md"></i> 
                                :
                                <i class="fa-regular fa-star fa-md cursor-pointer"
                                onClick={() => handleSave()}></i>}
                        </div>
                    </div>
                    {data.map((response, index) => (
                        <div>
                            {response.meanings.map((meaning) => (
                                <div className='mb-12 flex flex-col items-start border-t'>
                                    <p className='pt-2 border-b-4 mb-4 border-blueColor'>meaning:</p>
                                    {showSpeech && <p className=' bg-blueColor py-[2px] px-[4px] text-white'>{meaning.partOfSpeech}</p>}
                                    {meaning.definitions.map((definition, index) => (
                                        <div className='relative left-4'>
                                            <div className='flex gap-3 py-2 text-xl'>
                                                <p>{index+1}. </p>
                                                <div className='definition text-textColor'>{definition.definition}</div>
                                            </div>
                                            {definition.example && showExamples &&
                                                <div className='flex relative items-center left-2 gap-1 p-2'>
                                                    <span className='text-blueColor font-bold'>ex</span>
                                                    <p className='example left-2 border-l-4 pl-1 border-blueColor '>{definition.example}</p>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                    {showSynonyms && meaning.synonyms.length > 0  ?
                                    <div className='flex flex-wrap gap-4 text-xl py-2 relative left-8'>
                                        <span className='text-blueColor font-semibold'>- Synonym{meaning.synonyms.length > 1 ? "s:" : ":"}</span>
                                        {meaning.synonyms.map((synonym) => (
                                            <p className='hover:text-blueColor cursor-pointer flex gap-4'
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
            </div>}
    </div>
  )
}

export default Results
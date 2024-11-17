import {assets, projectsData} from "../assets/assets.js";
import {useEffect, useState} from "react";

export default function Projects(){

    const[currentIndex,setCurrentIndex]=useState(0);
    const[cardsToShow,setCardsToShow]=useState(1);

    const nextproject=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
    }
    const previousproject=()=>{
        setCurrentIndex((prevIndex)=>prevIndex===0 ? projectsData.length-1:prevIndex-1)
    }

    useEffect(() => {
        const updateCardToShow=()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length)
            }else{
                setCardsToShow(1)
            }
        };
        updateCardToShow();
        window.addEventListener('resize',updateCardToShow);
        return()=>window.removeEventListener('resize',updateCardToShow)
    }, []);
    return(
        <div className={'container mx-auto py-16 pt-20 px-6  md:px-20 lg:px-32  my:20 w-full overflow-hidden'} id={'Projects'}>
            <h1 className={'text-2xl sm:text-4xl font-bold mb-2 text-center'}>Projects <span className={'font-light underline underline-offset-4 decoration-1 under'}>Completed</span></h1>
            <p className={'text-center text-gray-500 mx-auto mb-8 max-w-80'}>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

            {/*Slider Buttons*/}
            <div className={'flex justify-end items-center mb-8'}>
                <button onClick={previousproject} className={'p-3 bg-gray-200 rounded mr-2 '} aria-label={'Previous Project'}>
                    <img src={assets.left_arrow} alt={'Previous'}/>
                </button>
                <button onClick={nextproject} className={'p-3 bg-gray-200 rounded mr-2 '} aria-label={'Next Project'}>
                    <img src={assets.right_arrow} alt={'Next'}/>
                </button>
            </div>

            {/*Project slider Container*/}
            <div className={'overflow-hidden'}>
                <div className={'flex gap-8 transition-transform duration-500 ease-in-out'}
                style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
                    {projectsData.map((project,index)=>(
                        <div key={index} className={'relative flex-shrink-0 w-full  sm:w-1/4'}>
                            <img src={project.image} alt={project.title} className={'w-full h-auto mb-14'}/>
                            <div className={'absolute right-0 left-0 bottom-5 flex justify-center'}>
                                <div className={'inline-block bg-white px-4 py-2 w-3/4 shadow-md'}>
                                    <h2 className={'text-xl font-semibold text-gray-800'}>{project.title}</h2>
                                    <p className={'text-gray-500 text-sm'}>{project.price} <span className={'px-1'}> </span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


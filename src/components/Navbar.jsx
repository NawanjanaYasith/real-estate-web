import {assets} from "../assets/assets";
import {useState} from "react";

export default function Navbar(){
    const[showMobileMenu,setShowMobileMenu]=useState(false);
    return(
        <div className={'absolute top-0 left-0 w-full z-10'}>
            <div className={'container mx-auto  flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'}>
                <img src={assets.logo} alt={'Error'}/>
                <ul className={'hidden md:flex gap-7 text-white'}>
                    <a href={'#Header'} className={'cursor-pointer hover:text-gray-400'}>Home</a>
                    <a href={'#About'} className={'cursor-pointer hover:text-gray-400'}>About</a>
                    <a href={'#Projects'} className={'cursor-pointer hover:text-gray-400'}>Projects</a>
                    <a href={'#Testimonials'} className={'cursor-pointer hover:text-gray-400'}>Testimonials</a>
                </ul>
                <button className={'hidden md:block bg-white px-8 py-2 border rounded-full'}>Sign up</button>
                <img src={assets.menu_icon} className={'md:hidden w-7 cursor-pointer'} onClick={()=>setShowMobileMenu(true)} alt={''}/>
            </div>
            {/*Mobile-menu*/}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-25 h-60 mt-6':'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className={'flex justify-end pt-4 pr-3 cursor-pointer'}>
                    <img src={assets.cross_icon} alt={'Error'} className={'w-6'} onClick={()=>setShowMobileMenu(false)}/>
                </div>
                <ul className={'flex flex-col mt-2 px-2 text-lg font-medium'}>
                    <a href={'#Header'} onClick={()=>setShowMobileMenu(false)} className={'cursor-pointer px-4 py-1 rounded-full inline-block'}>Home</a>
                    <a href={'#About'} onClick={()=>setShowMobileMenu(false)} className={'cursor-pointer px-4 py-1 rounded-full inline-block'}>About</a>
                    <a href={'#Projects'} onClick={()=>setShowMobileMenu(false)} className={'cursor-pointer px-4 py-1 rounded-full inline-block'}>Projects</a>
                    <a href={'#Testimonials'} onClick={()=>setShowMobileMenu(false)} className={'cursor-pointer px-4 py-1 rounded-full inline-block'}>Testimonials</a>
                </ul>
            </div>
        </div>
    )
}
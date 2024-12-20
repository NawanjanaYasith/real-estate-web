import {assets, testimonialsData} from "../assets/assets.js";

export default function Testimonials(){
    return(
        <div className={'container py-10 mx-auto lg:px-32 w-full overflow-hidden'} id={'Testimonials'}>
            <h1 className={'text-2xl sm:text-4xl font-bold mb-2 text-center'}>Customer <span className={'underline underline-offset-4 decoration-1 under font-light'}>Testimonials</span></h1>
            <p className={'text-gray-500 max-w-80  mx-auto text-center mb-12'}>Real Stories from Those Who Found Home with Us</p>
            <div className={'flex flex-wrap justify-center gap-8'}>
                {testimonialsData.map((testimonial,index)=>(
                    <div key={index} className={'max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'}>
                        <img src={testimonial.image} alt={testimonial.alt} className={'w-20 h-20 rounded-full  mx-auto mb-4'}/>
                        <h2 className={'text-xl text-gray-700 font-medium'}>{testimonial.name}</h2>
                        <p className={'text-gray-500 mb-4  text-sm'}>{testimonial.title}</p>
                        <div className={'flex justify-center  gap-1  text-red-500 mb-4'}>
                            {Array.from({length:testimonial.rating},(item,index)=>(
                                <img key={index} src={assets.star_icon} alt={'Error'}/>
                            ))}
                        </div>
                        <p className={'text-gray-600'}>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


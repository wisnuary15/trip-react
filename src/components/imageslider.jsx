import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"

const Imageslider = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1594849425906-205ebbc48c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            title: 'Healthy Tropical Fruit Bowl',
        },
        {
            url: 'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: 'Vegan veggie Bowl',
        },
        {
            url: 'https://images.unsplash.com/photo-1520690594286-1aadf7e7af36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Sate',
        },
        {
            url: 'https://images.unsplash.com/photo-1643357774422-d975ae18161f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Varian Rujak',
        },
    ];

    const [currentIndex, setcurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setcurrentIndex(slideIndex)
    }

    return (
        <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group ">
            <div
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            </div>
            {/*left arrow*/}
            <div className="absolute top-[50%] -translate-x-0 tralate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer size={30]">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/*right arrow*/}
            <div className="absolute top-[50%] -translate-x-0 tralate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer size={30]">
                <BsChevronCompactRight onClick={nextSlide} />
            </div>

            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div className=" text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}> 
                        <RxDotFilled />
                    </div>  
                ))}
            </div>
        </div>
    );
}

export default Imageslider;

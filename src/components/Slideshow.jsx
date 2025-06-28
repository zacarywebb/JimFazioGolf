import React, { useState } from 'react';
import { courseImages } from "../constants/index.js";

// Example course names to go with images (same order)
const courseNames = [
    'Trump National',
    'Currahee Club',
    'Trump International',
    'The River Golf Club',
    'Currahee Club',
    'Canouan Island',
    'Ocean View',
    'Currahee Club',
    'South Springs',
    'Boca Grove – Hole 9',
    'Ocean Course',
    'Tambor – Hole 7',
    'Trump International',
    'Tambor – Hole 9',
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const length = courseImages.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden">
            {/* Main Image */}
            <div className="relative">
                <img
                    src={courseImages[current]}
                    alt={`Course ${current + 1}`}
                    className="w-full h-[500px] object-cover transition-all duration-500"
                />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm text-white text-center py-3 px-4">
                    <p className="text-lg font-medium">{courseNames[current]}</p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-80 z-10"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-80 z-10"
            >
                ›
            </button>

            {/* Thumbnail Dock */}
            <div className="w-full overflow-x-auto mt-2 flex gap-3 justify-center px-4 py-3 bg-black bg-opacity-30">
                {courseImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 ${
                            index === current ? 'border-white' : 'border-transparent'
                        } transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;

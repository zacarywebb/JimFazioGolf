import React from 'react';

const WorkExamples = () => {
    const images = [
        '/images/courses/bankSketch.JPG',
        '/images/courses/blueprint2.jpeg',
        '/images/courses/tractor.JPG',
        '/images/courses/flowerBed.JPG'
    ];

    return (
        <section className=" px-6 md:px-16 py-20 bg-black-200 text-white">
            <div className="flex flex-col lg:flex-row gap-10 fade-in">
                {/* Left: Video + Image */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Native Video Element */}
                    <video
                        controls
                        playsInline
                        muted
                        autoPlay
                        className="w-full aspect-video rounded-xl border border-white/10 object-cover"
                    >
                        <source src="/videos/3dModel.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Extra Image Below */}
                    <img
                        src="/images/courses/golfCart.jpg"
                        alt="Work Sample"
                        className="w-full h-72 object-cover rounded-xl border border-white/10 hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Right: 2x2 Image Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-full aspect-square overflow-hidden rounded-xl border border-white/10"
                        >
                            <img
                                src={src}
                                alt={`Work example ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExamples;

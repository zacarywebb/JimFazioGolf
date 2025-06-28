import React from 'react';

const golfServices = [
    {
        title: "Construction Plans",
        items: [
            "Site Analysis & Land Clearing",
            "Earthworks & Contour Shaping",
            "Green Details & Design Specifications",
            "Secondary Drainage & As-Builts"
        ]
    },
    {
        title: "Design Coordination",
        items: [
            "Design Implementation",
            "Protect Natural Elements",
            "Ameliorate Design Concepts"
        ]
    },
    {
        title: "Project Director",
        items: [
            "Coordinate Contractors",
            "Project Quality Control",
            "Owner Representation",
            "Contract Performance"
        ]
    }
];

const technicalServices = [
    {
        title: "Aerial Mapping",
        items: [
            "Terrain and Natural Asset Sketches",
            "Orthomosaic",
            "Digital Elevation Models",
            "Render Contours",
            "Volumetrics"
        ]
    },
    {
        title: "3D Renderings",
        items: [
            "Concept Modeling for Client Review",
            "Conceptual Routing",
            "Photo-Realistic Course Visualizations",
            "Detailed Terrain Modeling",
            "Video Game Simulations of 3D Models"
        ]
    }
];

const GolfServicesShowcase = () => {
    const images = [
        '/images/courses/bankSketch.JPG',
        '/images/courses/blueprint2.jpeg',
        '/images/courses/tractor.JPG',
        '/images/courses/flowerBed.JPG'
    ];

    return (
        <section className="bg-black-200 text-white px-6 md:px-16 py-10 fade-in">
            <div className=" text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-white-50 font-extrabold uppercase tracking-wider mb-4">Golf Services</h2>
                <p className="mt-4 text-lg max-w-8xl mx-auto text-white">
                    We provide a comprehensive suite of services that most other architects outsource. Through the integration of advanced
                    technologies like aerial mapping, 3D modeling, and interactive visualizations, we are able to bring golf course concepts to life
                    with exceptional precision. Our approach preserves the natural landscape while blending tradition and
                    innovation to create courses that are both timeless and forward-thinking.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {golfServices.map((service, index) => (
                    <div key={index} className="card border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <h3 className="text-2xl font-bold mb-4 text-white-50">{service.title}</h3>
                        <ul className="space-y-2 list-disc list-inside text-white/90">
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            {/* Showcase Row */}
            <div className="flex flex-col lg:flex-row gap-10 mb-12">
                {/* Left: 3D + Mapping Services + Video */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <video
                        controls
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="w-full aspect-video rounded-xl border border-white/10 object-cover"
                    >
                        <source src="/videos/videoGame.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {technicalServices.map((service, index) => (
                            <div key={index} className="card border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                                <h3 className="text-2xl font-bold mb-4 text-white-50">{service.title}</h3>
                                <ul className="space-y-2 list-disc list-inside text-white/90">
                                    {service.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right: Video + Image */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">

                    <img
                        src="/images/courses/arielModel.JPG"
                        alt="Work Sample"
                        className="w-full h-72 object-cover rounded-xl border border-white/10 hover:scale-110 transition-transform duration-300"
                    />
                    <video
                        controls
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="w-full aspect-video rounded-xl border border-white/10 object-cover"
                    >
                        <source src="/videos/3dModel.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div>

            {/* Image Grid Below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </section>
    );
};

export default GolfServicesShowcase;

import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button'
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import DesignProcess from "./DesignProcess.jsx";

const Hero = () => {
    //Animate Hero Section
    useGSAP(() => {
        gsap.fromTo('.hero-text h1, p',
            {
                y: 70,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger:0.4,
                duration: 1,
                ease: 'power2.inOut',
            });
    });

    return (
        <section id='hero' className='relative mt-30 pt-0'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background'/>
            </div>

            <div className='hero-layout'>
                {/*Left side of Hero-Section*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5 mt-19 xl:-mt-120'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>

                            <h1>Behind Every Great
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word =>(
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7
                                                md:pd-2 p-1 rounded-full bg-white-50'/>
                                                <span>{word.text}</span>
                                            </span>
                                        )))}
                                    </span>
                                </span>
                            </h1>

                            <h1 className="text-2xl font-medium">...is an architect with a vision</h1>
                            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none mt-5'>
                                Jim Fazio Golf
                            </p>
                        </div>

                        <Button className='md:w-85 md:h-16 w-60 h-12' to='/about' text='Learn More'/>
                    </div>
                </header>

                {/*Right and lower side of Hero Section: 3D Model*/}
                <figure>
                    <div className='hero-3D-layout'>
                        <div className="hero-3d-layout z-0 xl:mt-10">
                            <HeroExperience />
                        </div>
                    </div>
                </figure>
            </div>
        </section>

    );
}
export default Hero

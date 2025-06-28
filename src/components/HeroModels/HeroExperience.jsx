import React from 'react';
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
//import {useMediaQuery} from "react-responsive";
import { CourseModel } from "./Course-model-compressed.jsx";

const HeroExperience = () => {

    return (
        <Canvas camera={{ position: [20, 90, 150], fov: 45 }}>
            <ambientLight intensity={0.2} color='#1a1a40'/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI/3.5}
                maxPolarAngle={Math.PI/2.5}
                autoRotate={true}
                autoRotateSpeed={1}

            />
            <CourseModel scale={[0.8, 0.8, 0.8]} position={[0, -2, 0]}/>



        </Canvas>
    )
}
export default HeroExperience

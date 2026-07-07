import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CourseModel } from "./Course-model-compressed.jsx";

const HeroExperience = () => {
    return (
        <Canvas camera={{ position: [20, 90, 150], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={0.45} color="#e8dcc0" />
            <directionalLight position={[60, 80, 40]} intensity={1.4} color="#fff3dd" />
            <directionalLight position={[-40, 30, -60]} intensity={0.35} color="#8aa08e" />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI / 2.5}
                autoRotate
                autoRotateSpeed={0.6}
            />

            <Suspense fallback={null}>
                <CourseModel scale={[0.8, 0.8, 0.8]} position={[0, -2, 0]} />
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;

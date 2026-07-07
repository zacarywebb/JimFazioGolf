import { useGLTF } from "@react-three/drei";
import { asset } from "../../lib/asset.js";

const MODEL_URL = asset("course-model-compressed.glb");

export function CourseModel(props) {
    const { nodes, materials } = useGLTF(MODEL_URL);
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Model_material0_0.geometry}
                material={materials.material0}
                position={[10.137, 0.76, 1.953]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={339.508}
            />
        </group>
    );
}

useGLTF.preload(MODEL_URL);

import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: ThreeElements['bufferGeometry'] & { ref?: any };
            meshLineMaterial: ThreeElements['meshStandardMaterial'] & {
                color?: string | THREE.Color | number;
                lineWidth?: number;
                transparent?: boolean;
                opacity?: number;
                depthTest?: boolean;
            };
        }
    }
}

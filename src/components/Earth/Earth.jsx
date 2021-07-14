import { Suspense } from 'react'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import earhCloudsMap from '../../assets/textures/earth_clouds.jpg'
import earthDayMap from '../../assets/textures/earth_daymap.jpg'
import earthNormalMap from '../../assets/textures/earth_normal_map.jpg'
import earthSpecularMap from '../../assets/textures/earth_specular_map.jpg'
import SpinnerLoader from '../Loader/SpinnerLoader'
// import earthNight from '../../assets/textures/earth_nightmap.jpg'

const Scene = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [earthDayMap, earthNormalMap, earthSpecularMap, earhCloudsMap]
  )

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls autoRotate />
      </mesh>
    </>
  )
}

const Earth = () => {
  return (
    <Canvas>
      <Suspense fallback={<SpinnerLoader />}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default Earth

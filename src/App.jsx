import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <>
    <Canvas 
    camera={{
      position: [3, 3, 3],
    }}
     > 
     <color attach="background" args={["#333333"]}/>
    <OrbitControls/> {/* able rotate the camera*/}
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]}/> {/*cube*/}

        <meshNormalMaterial/> {/*cube material */}
      </mesh>
    </Canvas>
     
    </>
  ); 
}

export default App;

import React from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Suspense } from 'react';
import { Effects, Fisheye, OrbitControls, PerspectiveCamera, PointerLockControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import url from '../../assets/landing.mp4';
import { useState, useRef, useEffect } from 'react';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';

extend({ GlitchPass, BloomPass });

const Landing = () => {

    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = url;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        vid.playsInline;
        vid.id = "video";
        return vid;
    });

    return (
      <mesh rotation={[0, 0, 0]}>
        <hemisphereLight intensity={0.1} groundColor='black' />
        <spotLight
          position={[60, 50, -10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={0} /> 
        <planeGeometry args={[28, 14]} />
        <meshStandardMaterial emissive='white' side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    );
};

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[25,15,50]} />
      <meshStandardMaterial side={THREE.BackSide}color="grey" />
    </mesh>
  );
}

const handleMouseMovement = (mouseX, mouseY, cameraOrientationState) => {
  const now = performance.now();

  cameraOrientationState.lastMouseMoveTime = now;

  const rotationScale = 0.05;

  cameraOrientationState.pitchAngle = -(mouseY * rotationScale) * Math.PI;
  cameraOrientationState.yawAngle = -(mouseX * rotationScale) * Math.PI;

  cameraOrientationState.startingPitchAngleForCurrentCoordinates = cameraOrientationState.previousPitchAngle;
  cameraOrientationState.startingYawAngleForCurrentCoordinates = cameraOrientationState.previousYawAngle;
};

const handleCameraRotation = (orbitRef, cameraOrientationState) => {
  const now = performance.now();

  const timeElapsed = now - cameraOrientationState.lastMouseMoveTime;

  if (timeElapsed < cameraOrientationState.movementDuration) {
    const timeLeftPercentage = timeElapsed / cameraOrientationState.movementDuration;
    const minimumDegreeOfChange = 0.05;

    let interpolationFactor = Math.max(timeLeftPercentage, minimumDegreeOfChange);

    const interpolatedPitchAngle =
      (1 - interpolationFactor) * cameraOrientationState.startingPitchAngleForCurrentCoordinates +
      interpolationFactor * cameraOrientationState.pitchAngle;
    const interpolatedYawAngle =
      (1 - interpolationFactor) * cameraOrientationState.startingYawAngleForCurrentCoordinates +
      interpolationFactor * cameraOrientationState.yawAngle;

    // Update the orbitRef's target values
    if(orbitRef && orbitRef.current){
        orbitRef.current.target.x = interpolatedYawAngle * - 0.01;
        orbitRef.current.target.y = interpolatedPitchAngle* 0.01;
    }
    

    // Update the previous pitch and yaw angles
    cameraOrientationState.previousPitchAngle = interpolatedPitchAngle;
    cameraOrientationState.previousYawAngle = interpolatedYawAngle;
  }
};

const LandingCanvas = () => {
  const orbitRef = useRef();
  const screenCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const cameraOrientationState = {
    lastMouseMoveTime: 0,
    movementDuration: 1000, // Adjust as needed
    pitchAngle: 0,
    yawAngle: 0,
    startingPitchAngleForCurrentCoordinates: 0,
    startingYawAngleForCurrentCoordinates: 0,
    previousPitchAngle: 0,
    previousYawAngle: 0,
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const scale = -0.01;

      const mouseX = e.clientX - screenCenter.x;
      const mouseY = e.clientY - screenCenter.y;

      handleMouseMovement(mouseX, mouseY, cameraOrientationState);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      handleCameraRotation(orbitRef, cameraOrientationState);
      requestAnimationFrame(animate);
    };

    animate();
  }, [cameraOrientationState]);

  return (
    <>
      <Canvas
        flat
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ position: 'fixed', height: '100vh', width: '100vw', top: '0', left: '0', overflow: 'hidden' }}
      >
        <Effects>
          <bloomPass attachArray="passes"/>
          <glitchPass attachArray="passes" />
        </Effects>
        <Fisheye zoom={0}>
          <Suspense>
            
            <OrbitControls ref={orbitRef} minPolarAngle={0} maxPolarAngle={Math.PI / 2} maxAzimuthAngle={Math.PI / 4} enablePan={false} enableZoom={false}/>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Landing />
            <Box />
          </Suspense>
          <Preload all />
        </Fisheye>
      </Canvas>
    </>
  );
};

export default LandingCanvas;


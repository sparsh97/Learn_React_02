import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import ModelView from './ModelView';
import { yellowImg } from '../utils';
import * as THREE  from 'three'

function Model() {
   const [size, setsize] = useState('small');
   const [model, setModel] = useState({
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ['#8F8A81', '#FFE789', '#6F6C64'],
      img: yellowImg
   });

   const cameraControllSmall = useRef();
   const cameraControllLarge = useRef();
   const small = useRef(new THREE.Group());
   const large = useRef(new THREE.Group());
   const [smallRotation, setSmallRotation] = useState(0);
   const [largeRotation, setLargeRotation] = useState(0);


   useGSAP(() => {
      gsap.to('#heading', {
         y: 0,
         opacity: 1
      })
   }, []);

  return (
    <section className='common-padding'>
      <div className="screen-max-width">
         <h1 id="heading" className='section-heading'>
            Take a closer look.
         </h1>
         <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
               <ModelView
                  index={1}
                  groupRef={small}
                  gsapType='view1'
                  controlRef={cameraControllSmall}
                  setRotationState={setSmallRotation}
                  item={model}
                  size={size}
               />
               <ModelView
                  index={2}
                  groupRef={large}
                  gsapType='view2'
                  controlRef={cameraControllLarge}
                  setRotationState={setLargeRotation}
                  item={model}
                  size={size}
               />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Model
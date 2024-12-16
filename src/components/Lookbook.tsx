import React, { useState } from "react";
import { Look } from "../type";
import RenderLook from "./Look";


interface IProps {
    looks: Look[];
}
const LookBook = (props:IProps ) =>{
    const { looks } = props;
    const [currentLookIndex, setCurrentLookIndex] = useState(0);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
  
    const currentLook = looks[currentLookIndex];


    const goToNextLook = () => {
      if(currentLookIndex === looks.length-1) {
        setAnimationClass('swipe-down');
        setTimeout(() => {
          setCurrentLookIndex(0);
          setAnimationClass('');
        }, 500); 
        setCurrentMediaIndex(0);
      }
      if (currentLookIndex < looks.length - 1) {
        setAnimationClass('swipe-up');
        setTimeout(() => {
          setCurrentLookIndex(currentLookIndex + 1);
          setAnimationClass('');
        }, 500); // Animation duration
        setCurrentMediaIndex(0);
      }
    };

    const goToPreviousLook = () => {
      if (currentLookIndex > 0) {
        setAnimationClass('swipe-down');
        setTimeout(() => {
          setCurrentLookIndex(currentLookIndex - 1);
          setAnimationClass('');
        }, 500); // Animation duration
        setCurrentMediaIndex(0);

      }
    };

    // Go to next media within a look
  const goToNextMedia = () => {
      if (currentMediaIndex < currentLook.media.length - 1) {
          setCurrentMediaIndex(currentMediaIndex + 1);
      } else {
        goToNextLook();        
      }
    };

  const goToPreviousMedia = () => {
      if (currentMediaIndex > 0) {
        setCurrentMediaIndex((prev) => prev - 1);
      } else {
        goToPreviousLook(); // Go to previous look if at the start
      }
    }; 
    return (
    <div 
    style={{
        width: '400px',
        height: '600px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
        <div  style={{ width: '100%', height: '100%' }}
        className={`look-container ${animationClass}`}
        onWheel={(e) => { e.deltaY > 0 ? goToNextLook() : goToPreviousLook()}}
      >
        {<RenderLook look = {currentLook} mediaIndex ={currentMediaIndex} goToNextMedia={goToNextMedia} goToPreviousMedia={goToPreviousMedia}/>}
        </div> 
    </div>
    )
}

export default LookBook;
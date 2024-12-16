import React from "react";
import { Look } from "../type";
import ImageWithAnnotations from "./ImageWithAnnotations";
import VideoWithControls from "./Video";

interface IProps {
    look: Look;
    mediaIndex: number;
    goToNextMedia: () => void;
    goToPreviousMedia: () => void; 
}

const RenderLook = ({look, mediaIndex,goToNextMedia,goToPreviousMedia}: IProps) =>{
    const currentMedia = look?.media[mediaIndex];
    return (<>
    {currentMedia.type === 'image' && (
      <ImageWithAnnotations
       imageUrl={currentMedia.url} 
       annotations={currentMedia.annotations || []} 
       onTimeComplete={goToNextMedia} 
       onNextMedia={goToNextMedia} 
       onPreviousMedia={goToPreviousMedia} 
       nextMediaActive= {mediaIndex !== look.media.length - 1}
       previousMediaActive={mediaIndex!== 0} 
       />
    )}
    {currentMedia.type === 'video' && (
      <VideoWithControls videoUrl={currentMedia.url} onVideoEnd={goToNextMedia} />
    )}
    </>)
};

export default RenderLook;
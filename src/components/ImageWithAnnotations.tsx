import React, { useEffect, useRef, useState } from 'react';
import { Annotation } from '../type';

interface ImageWithAnnotationsProps {
  imageUrl: string;
  annotations: Annotation[];
  onTimeComplete: () => void; 
  onPreviousMedia: () => void; // Triggered when clicking on the left side
  onNextMedia: () => void; // Triggered when clicking on the right side
  nextMediaActive: boolean;
  previousMediaActive: boolean;
}

const ImageWithAnnotations: React.FC<ImageWithAnnotationsProps> = ({nextMediaActive,previousMediaActive, imageUrl, annotations, onTimeComplete, onPreviousMedia, onNextMedia }) => {
  
  const [progress, setProgress] = useState(0); 
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
   
  useEffect(() => {
    // Reset progress
    setProgress(0);

    // Start progress bar timer
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1; // Increment by 1%
        if (nextProgress >= 100) {
          clearInterval(progressIntervalRef.current!); // Stop timer
          onTimeComplete(); // Move to the next media
        }
        return nextProgress;
      });
    }, 50); // 50ms * 100 = 5000ms = 5 seconds

    // Cleanup interval when the component unmounts
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [onTimeComplete]);

  return (
    <div
    style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src={imageUrl} alt="Annotated" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {annotations.map((annotation) => (
        <div
          key={annotation.id}
          style={{
            position: 'absolute',
            top: annotation.top,
            left: annotation.left,
            width: '15px',
            height: '15px',
            backgroundColor: 'rgba(0, 180, 180, 0.8)',
            border: '2px solid white',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
          title={annotation.label}
          onClick={() => alert(`Redirecting to Product: ${annotation.productId}`)}
        />
      ))}
       {/* Progress Bar */}
       <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '5px',
          backgroundColor: '#ddd',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#00b4b4',
            transition: 'width 50ms linear',
          }}
        />
      </div>

       { previousMediaActive && <button
       onClick={() =>{
        onPreviousMedia();
        setProgress(0);
       
       }}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        ◁
      </button>}

      { nextMediaActive && <button
      onClick={() => {
        setProgress(0);
        onNextMedia()
      }}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        ▷
      </button>
}
    </div>
  );
};

export default ImageWithAnnotations;
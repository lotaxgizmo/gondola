import React, { useRef, useEffect } from 'react';
import gondolavid from '../assets/gondolavid.mp4';

function Video() {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoElement.muted = false;
                } else {
                    videoElement.muted = true;
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust this value as needed
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        // Clean up the observer on unmount
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div className='lg:absolute z-10 flex justify-center items-center'>
            <video ref={videoRef} src={gondolavid} autoPlay loop muted className='w-96 lg:w-8/12 border-2x border-whitex lg:mt-10 rounded-xl'></video>
        </div>
    );
}

export default Video;

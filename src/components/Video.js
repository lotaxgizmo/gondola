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
                    videoElement.play().catch(error => {
                        console.error('Autoplay failed:', error);
                    });
                } else {
                    videoElement.muted = true;
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        if (videoElement) {
            observer.observe(videoElement);
            videoElement.play().catch(error => {
                console.error('Initial play failed:', error);
            });
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div className='lg:absolute z-10 flex justify-center items-center'>
            <video
                ref={videoRef}
                src={gondolavid}
                autoPlay
                loop
                muted
                playsInline
                className='w-96 lg:w-8/12 border-2x border-whitex lg:mt-10 rounded-xl'>
            </video>
        </div>
    );
}

export default Video;

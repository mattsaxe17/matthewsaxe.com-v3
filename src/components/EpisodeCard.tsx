'use client';

import { useRef, useState } from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import moment from 'moment';
import 'moment-duration-format';

type EpisodeProps = {
    title: string;
    dateString: string;
    description: string;
    length: string;
    mp3Link: string;
    image: string;
};

function EpisodeCard({ title, dateString, description, length, mp3Link, image }: EpisodeProps) {
    const [expanded, setExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTimestamp, setCurrentTimestamp] = useState(0);
    const descriptionThreshold = 190;
    const longDescription = description.length > descriptionThreshold;
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
      if (!isPlaying) {
        setInterval(() => {
          if (audioRef.current) {
            setCurrentTimestamp(audioRef.current.currentTime);
          }
        }, 250);
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
      setIsPlaying(!isPlaying);
    };


    return (
        <div className='flex items-stretch gap-3 px-5 py-6 border-b md:border-0 md:shadow-2xl md:rounded-lg md:mb-5 bg-primary-bg dark:bg-dark-primary-bg'>
            <div className='basis-16 shrink-0 hidden sm:block relative group self-start'>
                <img src={image} className='w-full' alt={title} />
                <button className='absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50' onClick={togglePlay}>
                    {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle className='hidden group-hover:block' />}
                </button>
                <audio ref={audioRef} src={mp3Link}></audio>
            </div>
            <div className='grow md:flex'>
                <div className='flex justify-between md:flex-col md:justify-start grow pr-8'>
                    <h3 className='font-bold'>{title}</h3>
                    <p className='text-sm hidden md:block'>{longDescription && !expanded ? description.substring(0, descriptionThreshold) + '...' : description}</p>
                    {longDescription && (
                        <p onClick={() => setExpanded(!expanded)} className='text-sm text-secondary-text dark:text-dark-secondary-text cursor-pointer hidden md:block'>
                            {expanded ? 'See less' : 'See more'}
                        </p>
                    )}
                </div>

                <div className='flex justify-between text-sm md:flex-col basis-24 shrink-0 grow-0 md:items-end'>
                    <p>{dateString}</p>
                    <p>{length.substring(3)}</p>
                    {/* <p>{moment.duration(currentTimestamp, 'seconds').format('h:mm:ss', {trim: false})}</p> */}
                </div>
            </div>
        </div>
    );
}

export default EpisodeCard;

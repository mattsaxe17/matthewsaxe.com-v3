'use client';

import { useEffect, useState } from 'react';

type TextCyclerProps = {
    iterations: Array<string>;
};

export default function Hero({ iterations }: TextCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    setInterval(() => {
        setCurrentIndex(currentIndex === iterations.length - 1 ? 0 : currentIndex + 1);
    }, 3500);

    useEffect(() => {
        // This just ensures that the rotation stays in sync with the changing text (Kind of hacky \:)
        setAnimationClass(`animate-[rotateDown_ease-in-out_3500ms_infinite]`);
    }, [currentIndex]);

    return (
        <div id='outer'>
            {/* Also kind of hacky \: */}
            <div id='inner' className={`${animationClass} whitespace-nowrap`}>
                {iterations[currentIndex]}
            </div>
        </div>
    );
}

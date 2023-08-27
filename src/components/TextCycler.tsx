'use client';

import { useState } from 'react';

type TextCyclerProps = {
    iterations: Array<string>;
};

export default function Hero({ iterations }: TextCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    setInterval(() => {
        setCurrentIndex(currentIndex === iterations.length - 1 ? 0 : currentIndex + 1);
    }, 3500);

    return (
        <div id='outer'>
            {/* Kind of hacky \: */}
            <div id='inner' className='animate-[rotateDown_ease-in-out_3500ms_infinite] whitespace-nowrap'>
                {iterations[currentIndex]}
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';

type TextCyclerProps = {
    iterations: Array<string>;
};

export default function TextCycler({ iterations }: TextCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Swap the text exactly when the rotate animation completes a cycle (the
    // element is edge-on / invisible at that moment), so the text change is
    // always in sync with the rotation instead of drifting off a separate timer.
    return (
        <div id='outer'>
            <div
                id='inner'
                className='animate-[rotateDown_ease-in-out_3500ms_infinite] whitespace-nowrap text-primary'
                onAnimationIteration={() => setCurrentIndex(prev => (prev + 1) % iterations.length)}
            >
                {iterations[currentIndex]}
            </div>
        </div>
    );
}

'use client'

import { useState } from 'react';

type PlatformProps = { name: string; icon: JSX.Element; link: string };

function PlatformIcon({ name, icon, link }: PlatformProps) {
    const [showName, setShowName] = useState(false);

    return (
        <a href={link}>
            <div title={name} className='text-2xl py-1' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
                {icon}
            </div>
            {showName && <div className='absolute text-xs text-secondary-text dark:text-dark-secondary-text'>{name}</div>}
        </a>
    );
}

export default PlatformIcon;

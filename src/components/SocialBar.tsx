'use client';

import { useEffect, useState } from 'react';

type SocialBarProps = {
    location: 'right' | 'left';
    fixed: boolean;
    desktopOnly: boolean;
    socials: Array<{ link: string; icon: JSX.Element }>;
    rotateable?: boolean;
};

function SocialBar({ location, fixed, desktopOnly, socials, rotateable }: SocialBarProps) {
    const [conditionalStyles, setConditionalStyles] = useState({ parent: '', children: '' });
    const propClasses = `${location === 'right' ? 'right-2' : location === 'left' ? 'left-2' : ''} ${fixed ? 'fixed' : 'absolute'} ${desktopOnly ? 'hidden md:flex' : ''}`;

    // If no dependencies are provided, the callback will be executed upon render
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const atBottom = isWindowScrolledToBottom();
            let parentStyles = '';
            let childStyles = '';

            if (atBottom && rotateable) {
                parentStyles = '-rotate-90 origin-[50%_calc(100%-48px)]';
                childStyles = 'rotate-90';
            }

            setConditionalStyles({ parent: parentStyles, children: childStyles });
        });
    });

    function isWindowScrolledToBottom() {
        const threshold = 10;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return scrollTop + windowHeight >= scrollHeight - threshold;
    }

    return (
        <div
            className={`${propClasses} text-secondary-text dark:text-dark-secondary-text
            w-12 bottom-0 flex flex-col items-center z-20 after:content-[''] after:left-2/4
            after:block after:w-0.5 after:h-24 after:bg-secondary-text after:dark:text-dark-secondary-text
            transition-all duration-1000 ${conditionalStyles.parent}`}
        >
            {socials.map(social => (
                <div key={social.link} className={`text-xl hover:text-primary hover:text-3xl transition-all duration-150 p-3 cursor-pointer ease-in-out ${conditionalStyles.children}`}>
                    <a href={social.link} target='_blank'>
                        {social.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SocialBar;

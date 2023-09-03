type SocialBarProps = {
    location: 'right' | 'left';
    fixed: boolean;
    desktopOnly: boolean;
    socials: Array<{ link: string; icon: JSX.Element }>;
};

function SocialBar({ location, fixed, desktopOnly, socials }: SocialBarProps) {
    const conditionalClasses = `${location === 'right' ? 'right-6' : location === 'left' ? 'left-6' : ''} ${fixed ? 'fixed' : ''} ${desktopOnly ? 'hidden md:flex' : ''}`;

    return (
        <div
            className={`${conditionalClasses} text-secondary-text dark:text-dark-secondary-text w-12 absolute bottom-0 flex flex-col items-center z-20 after:content-[''] after:left-2/4 after:block after:w-0.5 after:h-24 after:bg-secondary-text after:dark:text-dark-secondary-text`}
        >
            {socials.map(social => (
                <div key={social.link} className='text-xl hover:text-primary hover:text-3xl transition-all duration-150 py-3 cursor-pointer'>
                    <a href={social.link} target='_blank'>
                        {social.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SocialBar;

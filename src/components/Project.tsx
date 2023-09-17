type ProjectProps = {
    title: string;
    imageUrl: string;
    description: string;
    techStack: Array<string>;
    githubLink?: string;
    projectLink?: string;
};

function PlatformIcon({ title, imageUrl, description, techStack, githubLink, projectLink }: ProjectProps) {
    return (
        <div className='flex flex-col shadow-2xl rounded-lg bg-primary-bg dark:bg-dark-primary-bg shadow-dark-faint-text overflow-hidden'>
            <img src={imageUrl} />
            <div className='p-5'>
                <p className='text-primary'>Featured</p>
                <p className='text-lg font-bold mb-1 md:text-xl'>{title}</p>
                <p className='text-sm text-secondary-text dark:text-dark-secondary-text mb-2 md:text-lg'>{description}</p>
                <div className='flex gap-3'>
                {techStack.map(tech => (
                    <p key={tech} className='text-sm text-primary'>{tech}</p>
                ))}</div>
            </div>
        </div>
    );
}

export default PlatformIcon;

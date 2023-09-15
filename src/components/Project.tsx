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
        <div className='flex flex-col'>
            <img src={imageUrl} />
            <div className='p-5'>
                <p className=''>Featured</p>
                <h3>{title}</h3>
                <p className=''>{description}</p>
                {techStack.map(tech => (
                    <p key={tech}>{tech}</p>
                ))}
            </div>
        </div>
    );
}

export default PlatformIcon;

import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

type ProjectProps = {
    title: string;
    imageUrl: string;
    description: string;
    techStack: Array<string>;
    projectLink?: string;
    githubLink?: string;
};

function PlatformIcon({ title, imageUrl, description, techStack, githubLink, projectLink }: ProjectProps) {
    return (
        <div className='flex flex-col shadow-2xl rounded-lg bg-primary-bg dark:bg-dark-primary-bg shadow-dark-faint-text overflow-hidden'>
            <img src={imageUrl} />
            <div className='p-5'>
                <div className='flex justify-between'>
                    <p className='text-primary'>Featured</p>
                    {githubLink && (
                        <a href={githubLink}>
                            <BsGithub />
                        </a>
                    )}
                </div>

                <p className='text-lg font-bold mb-1 md:text-xl'>{projectLink ? <Link className='hover:text-secondary dark:hover:text-dark-secondary-text' href={projectLink}>{title}</Link> : <>{title}</>} </p>

                <p className='text-sm text-secondary-text dark:text-dark-secondary-text mb-2 md:text-lg'>{description}</p>
                <div className='flex gap-3'>
                    {techStack.map(tech => (
                        <p key={tech} className='text-sm text-primary'>
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlatformIcon;

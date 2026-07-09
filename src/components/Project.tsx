import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';

type ProjectProps = {
    title: string;
    imageUrl: string;
    description: string;
    techStack: Array<string>;
    projectLink?: string;
    githubLink?: string;
};

function Project({ title, imageUrl, description, techStack, githubLink, projectLink }: ProjectProps) {
    const linkHref = projectLink ?? githubLink;
    return (
        <div className='overflow-hidden rounded-[16px] border border-[#37332e] bg-[#2c2926]'>
            <div className='h-[240px] w-full overflow-hidden bg-[#1e1c1a]'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt={title} className='h-full w-full object-cover object-top' />
            </div>
            <div className='p-[22px]'>
                <div className='mb-1.5 flex items-center justify-between'>
                    <span className='font-mono text-[12px] uppercase tracking-[1px] text-primary'>Featured</span>
                    {linkHref && (
                        <a href={linkHref} target='_blank' rel='noopener noreferrer' aria-label={`${title} link`} className='text-[#8b8b8b] hover:text-primary'>
                            <BsLink45Deg size={18} />
                        </a>
                    )}
                </div>
                <h3 className='mb-2 font-display text-[22px] font-bold'>
                    {linkHref ? (
                        <Link href={linkHref} className='text-[#f4f4f2] hover:text-primary'>
                            {title}
                        </Link>
                    ) : (
                        <span className='text-[#f4f4f2]'>{title}</span>
                    )}
                </h3>
                <p className='mb-4 text-[14.5px] leading-[1.6] text-[#a8a6a1]'>{description}</p>
                <div className='flex gap-[14px] font-mono text-[13px] text-primary'>
                    {techStack.map(tech => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const links = [
    { href: 'https://github.com/mattsaxe17', icon: <BsGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin />, label: 'LinkedIn' },
    { href: 'mailto:mattsaxe17@gmail.com', icon: <MdEmail />, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className='relative z-10 mx-auto mt-24 flex max-w-7xl items-center justify-between border-t border-[#37332e] px-6 py-[26px] md:px-16'>
            <p className='text-[13px] text-[#8b8b8b]'>© {new Date().getFullYear()} Matthew Saxe</p>
            <div className='flex gap-[18px] text-[17px] text-[#8b8b8b]'>
                {links.map(({ href, icon, label }) => (
                    <a key={label} href={href} target='_blank' rel='noopener noreferrer' aria-label={label} className='transition-colors hover:text-primary'>
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
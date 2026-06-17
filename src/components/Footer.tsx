import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const links = [
    { href: 'https://github.com/mattsaxe17', icon: <BsGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin />, label: 'LinkedIn' },
    { href: 'mailto:matt@matthewsaxe.com', icon: <MdEmail />, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className='h-24 px-6 w-screen bg-primary-bg dark:bg-dark-primary-bg border-t-2 border-t-secondary-text dark:border-t-dark-secondary-text text-secondary-text dark:text-dark-secondary-text flex justify-between items-center'>
            <p className='text-sm'>© {new Date().getFullYear()} Matthew Saxe</p>
            <div className='flex gap-4 text-xl'>
                {links.map(({ href, icon, label }) => (
                    <a key={label} href={href} target='_blank' aria-label={label} className='hover:text-primary transition-colors'>
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
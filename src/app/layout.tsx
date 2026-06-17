import AppBar from '@/components/AppBar';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import SocialBar from '@/components/SocialBar';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const metadata: Metadata = {
    title: 'Matt Saxe | Software Engineer & Freelancer',
    description: "I'm a software engineer in Dallas, TX helping small businesses automate processes and solve real problems with code.",
};

const navItems = [
    { label: 'Services', url: '/#services' },
    { label: 'Work', url: '/#work' },
    { label: 'Contact', url: '/#contact' },
];

const socials = [
    { link: 'https://github.com/mattsaxe17', icon: <BsGithub /> },
    { link: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin /> },
{ link: 'mailto:matt@matthewsaxe.com', icon: <MdEmail /> },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='dark'>
            <body className='bg-primary-bg dark:bg-dark-primary-bg max-w-full overflow-x-hidden'>
                <Providers>
                    <AppBar navItems={navItems} socials={socials}></AppBar>
                    {children}
                    <SocialBar desktopOnly fixed location='right' socials={socials} rotateable />
                </Providers>
            </body>
        </html>
    );
}

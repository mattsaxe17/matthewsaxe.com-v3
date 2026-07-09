import AppBar from '@/components/AppBar';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import SocialBar from '@/components/SocialBar';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const metadata: Metadata = {
    metadataBase: new URL('https://matthewsaxe.com'),
    title: 'Matt Saxe — AI-First Software Engineer',
    description:
        'AI-first software engineer. I design, build, and ship production software fast — most recently Rollr, a live SaaS I launched solo. Open to freelance builds and full-time roles.',
    openGraph: {
        title: 'Matt Saxe — AI-First Software Engineer',
        description:
            'I design, build, and ship production software fast with an AI-first workflow. Most recently: Rollr, a live SaaS, built and launched solo.',
        url: 'https://matthewsaxe.com',
        siteName: 'Matt Saxe',
        images: [{ url: '/hero-image.png', width: 1000, height: 1000, alt: 'Matt Saxe' }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Matt Saxe — AI-First Software Engineer',
        description: 'AI-first software engineer. I ship production software fast.',
        images: ['/hero-image.png'],
    },
};

const navItems = [
    { label: 'What I Do', url: '/#services' },
    { label: 'Work', url: '/#work' },
    { label: 'Contact', url: '/#contact' },
];

const socials = [
    { link: 'https://github.com/mattsaxe17', icon: <BsGithub /> },
    { link: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin /> },
    { link: 'mailto:mattsaxe17@gmail.com', icon: <MdEmail /> },
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

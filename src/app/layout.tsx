import AppBar from '@/components/AppBar';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import SocialBar from '@/components/SocialBar';
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsTwitter } from 'react-icons/bs';

export const metadata: Metadata = {
    title: 'Home | Matt Saxe',
    description:
        "I'm a software engineer in Dallas, TX. Unfortunately, I am currently not building any software for clients. I've been working very hard on some other projects though, so feel free to check back here to see what I'm up to. Big things are coming.",
};

const navItems = [
    { label: 'About', url: '/#about' },
    { label: 'Software', url: '/software' },
    { label: 'Podcast', url: '/podcast' },
    { label: 'Blog', url: '/blog' },
    { label: 'Reading', url: '/reading' },
    { label: 'Contact', url: '/contact' },
];

const socials = [
    { link: 'https://open.spotify.com/show/354VSGqhb5Q1KHtNLm03Ub?si=9f83d5bc9d4049b0', icon: <BsSpotify /> },
    { link: 'https://github.com/mattsaxe17', icon: <BsGithub /> },
    { link: 'https://www.linkedin.com/in/mattsaxe17/', icon: <BsLinkedin /> },
    { link: 'https://www.instagram.com/matthew_saxe/', icon: <BsInstagram /> },
    { link: 'https://twitter.com/mattsaxe17', icon: <BsTwitter /> },
    { link: 'mailto:matt@matthewsaxe.com', icon: <MdEmail /> },
];

const quotes = [
    `"The happiness of your life depends upon the quality of your thoughts." -Marcus Aurelius`,
    `"I'll forgive an enemy before I forgive a friend, One is breaking a code, one is actin' in character." -Russ`,
    `"Waste no more time arguing about what a good man should be. Be one." -Marcus Aurelius`,
    `"Most already know what to do and simply don’t do it. It’s not ignorance. It’s fear." -Alex Hormozi`,
    `"Rather than picking up your next book, take action on your last book." -Alex Hormozi`,
    `“You Cannot Overestimate the Unimportance of Practically Everything.”- John Maxwell`,
    `“Tradition is a set of solutions for which we have forgotten the problems, take the solution away and often the problem comes back.”– Chris Williamson`,
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='dark'>
            <body className='bg-primary-bg dark:bg-dark-primary-bg max-w-full overflow-x-hidden'>
                <Providers>
                    <AppBar navItems={navItems} socials={socials} quotes={quotes}></AppBar>
                    {children}
                    <SocialBar desktopOnly fixed location='right' socials={socials} />
                </Providers>
            </body>
        </html>
    );
}

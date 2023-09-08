'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';
import { useEffect, useState } from 'react';
import NavDrawer from '@/components/NavDrawer';

type NavItem = {
    label: string;
    url: string;
};

type AppBarProps = {
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: JSX.Element }>;
    quotes?: Array<string>;
};

export default function AppBar({ navItems, socials, quotes }: AppBarProps) {
    const [scrollPos, setScrollPos] = useState(100);
    const [conditionalStyles, setConditionalStyles] = useState('');
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [showV3Announcement, setShowV3Announcement] = useState(false);

    const toggleNavDrawer = (override: boolean) => {
        override === undefined ? setNavDrawerOpen(!navDrawerOpen) : setNavDrawerOpen(override);
    };

    // If no dependencies are provided, the callback will be executed upon render
    useEffect(() => {
        window.onscroll = () => {
            const currentScrollPos = window.scrollY;
            const styles = [];

            if (scrollPos > currentScrollPos || currentScrollPos < 30) styles.push('top-0');
            else styles.push('-top-32');

            if (currentScrollPos < 30) {
                styles.push('shadow-none');
                styles.push('py-6');
                styles.push('h-32');
            } else {
                styles.push('bg-primary-bg dark:bg-dark-primary-bg');
                styles.push('shadow-2xl');
                styles.push('py-8');
                styles.push('h-24');
            }

            setConditionalStyles(styles.join(' '));
            setScrollPos(currentScrollPos);
        };
    });

    useEffect(() => {
        const handleresize = () => {
            if (window.innerWidth > 768) toggleNavDrawer(false);
        };

        window.addEventListener('resize', handleresize);
    });

    return (
        <div className={`fixed flex justify-between px-6 py-8 items-center w-full -delay-100 duration-500 transition-all ${conditionalStyles}`}>
            <Link href='/' className='flex items-center gap-2 cursor-help'>
                <Image src='/logo.svg' alt='My logo' width={40} height={50}></Image>
                <p className='italic text-primary' onMouseEnter={() => setShowV3Announcement(true)} onMouseLeave={() => setShowV3Announcement(false)}>V3</p>
                {showV3Announcement && <p className='fixed top-32 left-5 bg-primary-bg dark:bg-dark-primary-bg italic text-primary-text dark:text-dark-primary-text border-primary px-5 py-2 rounded-full border-2'>Welcome to version 3 of the site 😎</p>}
            </Link>

            <div className='md:hidden' onClick={() => setNavDrawerOpen(true)}>
                <Image src='/menu.svg' alt='Menu svg' width={40} height={50}></Image>
                <NavDrawer open={navDrawerOpen} navItems={navItems} socials={socials} toggleNavDrawer={toggleNavDrawer} quotes={quotes} />
            </div>

            <div className='hidden md:flex gap-4 items-center'>
                {navItems.map((navItem: NavItem, ind: number) => (
                    <Link href={navItem.url} key={navItem.label} className='text-primary-text dark:text-dark-primary-text group'>
                        <div className='group-hover:animate-bounce group-hover:text-secondary-text ease-in-out transition transform'>
                            <span className='text-primary font-bold'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                            <span className='font-thin'>{navItem.label}</span>
                        </div>
                    </Link>
                ))}

                <ThemeToggler></ThemeToggler>
            </div>
        </div>
    );
}

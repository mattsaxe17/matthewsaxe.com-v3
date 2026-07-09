'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavDrawer from '@/components/NavDrawer';

type NavItem = {
    label: string;
    url: string;
};

type AppBarProps = {
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: import('react').ReactElement }>;
};

export default function AppBar({ navItems, socials }: AppBarProps) {
    const [scrollPos, setScrollPos] = useState(100);
    const [conditionalStyles, setConditionalStyles] = useState('');
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = (override: boolean) => {
        override === undefined ? setNavDrawerOpen(!navDrawerOpen) : setNavDrawerOpen(override);
    };

    useEffect(() => {
        const handleScroll = () => {
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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        const handleresize = () => {
            if (window.innerWidth > 768) toggleNavDrawer(false);
        };
        window.addEventListener('resize', handleresize);
        return () => window.removeEventListener('resize', handleresize);
    });

    return (
        <div className={`fixed flex justify-between px-6 py-8 items-center w-full -delay-100 duration-500 transition-all z-50 ${conditionalStyles}`}>
            <Link href='/' className='flex items-center gap-2.5'>
                <Image src='/logo.svg' alt='My logo' width={40} height={40} className='h-10 w-auto' />
                <span className='font-mono text-[14px] italic text-primary'>V3</span>
            </Link>

            <div className='md:hidden' onClick={() => setNavDrawerOpen(true)}>
                <Image src='/menu.svg' alt='Menu svg' width={40} height={50} />
                <NavDrawer open={navDrawerOpen} navItems={navItems} socials={socials} toggleNavDrawer={toggleNavDrawer} />
            </div>

            <div className='hidden md:flex gap-[30px] items-center text-[15px]'>
                {navItems.map((navItem: NavItem, ind: number) => (
                    <Link href={navItem.url} key={navItem.label} className='text-[#e5e7eb] hover:text-[#e5e7eb] group'>
                        <span className='font-mono text-[13px] font-bold text-[#8b8b8b]'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                        <span className='group-hover:text-primary transition-colors'>{navItem.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

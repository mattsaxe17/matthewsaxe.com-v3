'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';
import { useEffect, useState } from 'react';

type NavItem = {
    label: string;
    url: string;
};

type AppBarProps = {
    navItems: Array<NavItem>;
};

export default function AppBar({ navItems }: AppBarProps) {
    const [scrollPos, setScrollPos] = useState(0);
    const [conditionalStyles, setConditionalStyles] = useState('');

    // If no dependencies are provided, the callback will be executed after every render of the component.
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
                styles.push('shadow-lg');
                styles.push('py-8');
                styles.push('h-24');
            }

            setConditionalStyles(styles.join(' '));
            setScrollPos(currentScrollPos);
        };
    });

    return (
        <div className={`${conditionalStyles} fixed flex justify-between px-6 items-center w-full -delay-100 duration-500 transition-all`}>
            <Link href='/'>
                <Image src='/logo.svg' alt='My logo' width={40} height={50}></Image>
            </Link>
            <div className='md:hidden'>
                <Image src='/menu.svg' alt='My logo' width={40} height={50}></Image>
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                {navItems.map((navItem: NavItem, ind: number) => (
                    <Link href={navItem.url} key={navItem.label} className='text-primary-tex dark:text-dark-primary-text group'>
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

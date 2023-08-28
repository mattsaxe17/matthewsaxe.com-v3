'use client'

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';

type NavItem = {
    label: string;
    url: string;
};

type AppBarProps = {
    navItems: Array<NavItem>;
};

export default function AppBar({ navItems }: AppBarProps) {
    return (
        <div className='fixed h-32 p-6 flex justify-between items-center w-full'>
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

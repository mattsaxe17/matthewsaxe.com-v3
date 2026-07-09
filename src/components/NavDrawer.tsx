import { SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import SocialBar from './SocialBar';
import { LuPanelRightClose } from 'react-icons/lu';

type NavItem = {
    label: string;
    url: string;
};

type NavDrawerProps = {
    open: boolean;
    toggleNavDrawer: (open: boolean) => void;
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: import('react').ReactElement }>;
};

export default function NavDrawer({ open, navItems, socials, toggleNavDrawer }: NavDrawerProps) {
    return (
        <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={() => toggleNavDrawer(false)}
            onOpen={() => toggleNavDrawer(true)}
            onClick={e => e.stopPropagation()}
        >
            <div className='flex w-screen bg-primary-bg dark:bg-dark-primary-bg p-6 h-full justify-between align-start'>
                <div className='pr-36 flex flex-col gap-3'>
                    {navItems.map((navItem: NavItem, ind: number) => (
                        <div key={navItem.label} onClick={() => toggleNavDrawer(false)}>
                            <Link href={navItem.url} className='text-primary-text dark:text-dark-primary-text group'>
                                <div className='group-hover:text-secondary-text ease-in-out flex flex-col'>
                                    <span className='text-secondary-text dark:text-dark-secondary-text font-bold'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                                    <span className='font-thin'>{navItem.label}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <SocialBar socials={socials} location='right' fixed={false} desktopOnly={false} />
                </div>
                <div>
                    <div className='text-2xl text-primary p-1 cursor-pointer' onClick={() => toggleNavDrawer(false)}>
                        <LuPanelRightClose />
                    </div>
                </div>
            </div>
        </SwipeableDrawer>
    );
}

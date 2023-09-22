import { Link, SwipeableDrawer } from '@mui/material';
import SocialBar from './SocialBar';
import ThemeToggler from '@/components/ThemeToggler';
import { LuPanelRightClose } from 'react-icons/lu';

type NavItem = {
    label: string;
    url: string;
};

type NavDrawerProps = {
    open: boolean;
    toggleNavDrawer: (open: boolean) => void;
    navItems: Array<NavItem>;
    socials: Array<{ link: string; icon: JSX.Element }>;
    quotes?: Array<string>;
};

export default function NavDrawer({ open, navItems, socials, toggleNavDrawer, quotes }: NavDrawerProps) {
    return (
        <SwipeableDrawer anchor='right' open={open} onClose={() => toggleNavDrawer(false)} onOpen={() => toggleNavDrawer(true)} sx={{ '.MuiLink-root': { textDecoration: 'none' } }} onClick={e => e.stopPropagation()}>
            <div className='flex min-w-6xl bg-primary-bg dark:bg-dark-primary-bg p-6 h-full w-full justify-between align-start'>
                <div className='pr-36 flex flex-col gap-3'>
                    {navItems.map((navItem: NavItem, ind: number) => (
                        <div key={navItem.label} onClick={() => toggleNavDrawer(false)}>
                            <Link href={navItem.url} className='text-primary-text dark:text-dark-primary-text group'>
                                <div className=' group-hover:text-secondary-text ease-in-out flex flex-col'>
                                    <span className='text-primary font-bold'>{`00${ind}`.slice(-2)}.&nbsp;</span>
                                    <span className='font-thin'>{navItem.label}</span>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <ThemeToggler></ThemeToggler>
                    <SocialBar socials={socials} location={'right'} fixed={false} desktopOnly={false} />
                </div>

                <div>
                    <div className='text-2xl text-primary p-1 cursor-pointer' onClick={() => toggleNavDrawer(false)}>
                        <LuPanelRightClose />
                    </div>
                </div>
            </div>

            {quotes && <p className='h-0 absolute left-2 bottom-2 text-lg -rotate-90 origin-top-left text-bold text-[#c1c1c1] dark:text-[#0f0f0f] italic'>{quotes[Math.floor(quotes.length * Math.random())]}</p>}
        </SwipeableDrawer>
    );
}

'use-client';

import { Switch } from '@mui/material';
import { useTheme } from 'next-themes';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export default function AppBar() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='flex items-center text-xl'>
            <Switch defaultChecked value={theme === 'light'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} color='default' />
            {theme === 'dark' ? <BsMoonStars /> : <BsSun />}
        </div>
    );
}

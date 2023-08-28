'use-client';

import { Switch } from '@mui/material';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export default function AppBar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex items-center text-xl'>
            <Switch defaultChecked value={theme === 'light'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} color='default' />
            {theme === 'dark' ? <BsMoonStars /> : <BsSun />}
        </div>
    );
}

'use-client';

import { Switch } from '@mui/material';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import tailwindConfig from '../../tailwind.config';

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex items-center text-xl text-primary-text dark:text-dark-primary-text'>
            <Switch
                defaultChecked
                value={theme === 'light'}
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                color='default'
                // Super hacky but it works \:
                sx={{
                    '.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: (tailwindConfig?.theme?.colors as any)['primary'],
                    },
                }}
            />
            {theme === 'dark' ? <BsMoonStars /> : <BsSun />}
        </div>
    );
}

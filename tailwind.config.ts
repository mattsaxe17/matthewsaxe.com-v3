import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            'primary': '#ed6d3c',
            'dark-primary-text': '#e5e7eb',
            'dark-secondary-text': '#8b8b8b',
            'dark-faint-text': '#000',
            'dark-primary-bg': '#252422',

            'primary-text': '#0a0a0a',
            'secondary-text': '#525252',
            'primary-bg': '#e5e5e5',
        },
        extend: {
            keyframes: {
                rotateDown: {
                    '0%': {
                        transform: 'translateZ(-1em) rotateX(90deg)',
                    },
                    '10%': {
                        transform: 'rotateX(0deg)',
                        'padding-right': '0',
                    },
                    '90%': {
                        transform: 'rotateX(0deg)',
                        'padding-right': '0',
                    },
                    '100%': {
                        transform: 'translateZ(-1em) rotateX(-90deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;

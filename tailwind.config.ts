import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            primary: '#ed6d3c',
            'primary-text': 'white',
            'secondary-text': '#8b8b8b',
            'primary-bg': '#252422'
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

import Image from 'next/image';
import Link from 'next/link';
import TextCycler from '@/components/TextCycler';

type HeroProps = {
    intro: string;
    name: string;
    constant: string;
    characteristics: Array<string>;
    description: string;
    cta: {
        url: string;
        label: string;
    };
};

export default function Hero({ intro, name, constant, characteristics, description, cta }: HeroProps) {
    return (
        <div id='hero' className='w-screen h-screen flex justify-center align-center px-6'>
            <div className='flex max-w-7xl'>
                <div className='flex flex-col justify-center align-start max-w-xl xl:max-w-2xl'>
                    <p className='text-primary font-bold text-xl'>{intro}</p>
                    <p className='text-primary-text dark:text-dark-primary-text font-bold mb-1 text-4xl md:text-6xl xl:text-8xl'>{name}.</p>
                    <div className='text-secondary-text dark:text-dark-secondary-text font-bold mb-5 flex text-3xl md:text-5xl xl:text-6xl'>
                        <span>{constant}</span>&nbsp;
                        <span>
                            <TextCycler iterations={characteristics}></TextCycler>
                        </span>
                    </div>
                    <p className='text-secondary-text dark:text-dark-secondary-text text-sm mb-10'>{description}</p>
                    <div>
                        <Link href={cta.url} className='bg-primary inline-block px-5 py-1 rounded text-primary-text dark:text-dark-primary-text font-bold'>
                            {cta.label}
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex max-w-md'>
                    <div className='flex items-center'>
                        <Image src='/hero-image.png' alt='My portrait' width={1000} height={1000}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

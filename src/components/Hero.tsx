import Image from 'next/image';
import Link from 'next/link';
import TextCycler from '@/components/TextCycler';

type Cta = {
    url: string;
    label: string;
};

type HeroProps = {
    intro: string;
    name: string;
    constant: string;
    characteristics: Array<string>;
    description: string;
    cta: Cta;
    secondaryCta?: Cta;
};

export default function Hero({ intro, name, constant, characteristics, description, cta, secondaryCta }: HeroProps) {
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
                    <div className='flex flex-wrap items-center gap-4'>
                        <Link href={cta.url} className='bg-primary inline-block px-5 py-2 rounded text-primary-text dark:text-dark-primary-text font-bold'>
                            {cta.label}
                        </Link>
                        {secondaryCta && (
                            <Link
                                href={secondaryCta.url}
                                className='inline-block px-5 py-2 rounded border border-primary text-primary font-bold hover:bg-primary hover:text-primary-text dark:hover:text-dark-primary-text transition-colors'
                            >
                                {secondaryCta.label}
                            </Link>
                        )}
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

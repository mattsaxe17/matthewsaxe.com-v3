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
        <div id='hero' className='w-screen h-screen flex justify-center align-center'>
            <div className='flex flex-col justify-center align-start p-5'>
                <p className='text-primary font-bold text-xl'>{intro}</p>
                <p className='text-primary-text font-bold text-4xl mb-1'>{name}.</p>
                <div className='text-secondary-text font-bold text-3xl mb-5 flex'>
                    <span>{constant}</span>&nbsp;
                    <span>
                        <TextCycler iterations={characteristics}></TextCycler>
                    </span>
                </div>
                <p className='text-secondary-text text-sm mb-10'>{description}</p>
                <div>
                    <Link href={cta.url} className='bg-primary inline-block px-5 py-1 rounded'>
                        {cta.label}
                    </Link>
                </div>
            </div>
            <div className='hidden'>
                <Image src='/hero-image.png' alt='My portrait' width={500} height={500}></Image>
            </div>
        </div>
    );
}

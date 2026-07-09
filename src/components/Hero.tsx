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
    const [first, ...rest] = name.split(' ');
    const last = rest.join(' ');

    return (
        <div id='hero' className='relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pt-16 md:px-16 lg:flex-row lg:items-center'>
            <div className='flex-1 lg:max-w-[620px]'>
                <p className='mb-4 font-mono text-[13px] uppercase tracking-[3px] text-primary'>{intro}</p>
                <h1 className='font-display text-[64px] font-extrabold leading-[0.9] tracking-[-2px] text-[#f4f4f2] md:text-[100px] md:tracking-[-3px]'>
                    {first}
                    <br />
                    {last}.
                </h1>
                <div className='my-6 flex gap-3 font-display text-[26px] font-semibold leading-[1.1] text-[#8b8b8b] md:text-[34px]'>
                    <span>{constant}</span>
                    <TextCycler iterations={characteristics} />
                </div>
                <p className='mb-8 max-w-[480px] text-[17px] leading-[1.6] text-[#b7b5b0] md:text-[18px]'>{description}</p>
                <div className='mb-8 flex flex-wrap items-center gap-4'>
                    <Link href={cta.url} className='rounded-[10px] bg-primary px-[26px] py-[13px] text-[15px] font-bold text-[#1a1917] hover:text-[#1a1917]'>
                        {cta.label}
                    </Link>
                    {secondaryCta && (
                        <Link href={secondaryCta.url} className='border-b border-[#3d3a35] px-2 py-[13px] text-[15px] font-semibold text-[#e5e7eb] hover:text-primary'>
                            {secondaryCta.label}
                        </Link>
                    )}
                </div>
                <div className='flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12.5px] text-[#8b8b8b]'>
                    <span className='inline-flex items-center gap-2'>
                        <span className='h-[7px] w-[7px] rounded-full bg-primary' />
                        Open to freelance work
                    </span>
                    <span>Dallas, TX</span>
                </div>
            </div>
            <div className='relative flex-shrink-0'>
                <div className='absolute -bottom-[18px] -right-[18px] left-[18px] top-[18px] rounded-[24px] border-[1.5px] border-primary' />
                <div className='relative flex h-[300px] w-[300px] items-end justify-center overflow-hidden rounded-[24px] bg-[#1e1c1a] md:h-[340px] md:w-[340px]'>
                    <Image src='/hero-image.png' alt='Matt Saxe' width={1000} height={1000} className='h-auto w-[90%]' />
                </div>
            </div>
        </div>
    );
}

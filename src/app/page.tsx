import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Watermark from '@/components/Watermark';

export default function Home() {
    return (
        <>
            <Watermark text='Saxe'></Watermark>
            <Hero
                intro="Hello I'm"
                name='Matt Saxe'
                constant='I'
                characteristics={['build software.', 'record podcasts.', 'read books.', 'practice martial arts.']}
                description="I'm a software engineer in Dallas, TX. Unfortunately, I am currently not building any software for clients. I've been working very hard on some other projects though, so feel free to check back here to see what I'm up to. Big things are coming."
                cta={{
                    url: '',
                    label: 'Reach out',
                }}
            ></Hero>

            <SectionHeader prefix='00.' title='About Me'></SectionHeader>
        </>
    );
}

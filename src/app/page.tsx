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

            <SectionHeader prefix='00.' title='About Me' anchor='about'></SectionHeader>

            {/* <p>If you know me, you know I have long list of interests. I&apos;m passionate about fitness and martial arts, read often, like to cook, and have recently adopted an animal based diet. As you probably guessed, I also have a deep passion for writing software. From websites to FitBit watch faces, I am passionate about problem solving through the medium of code. It all started in 11th grade, where I taught myself HTML, CSS, and Javascript in study hall... These days, I am a software engineer professionally. I am not currently taking any clients, but I have created projects for clients in the past. My experience extends from front-end design to servers and databases, and I love working with complex math, data structures, and algorithms. From simple websites to complex web apps, check out my Github to see what I&apos;m up to these days. (I am still very active on Github) I&apos;m always open to expand my network, so reach out however you&apos;d like - I&apos;d love to talk.</p> */}
        </>
    );
}

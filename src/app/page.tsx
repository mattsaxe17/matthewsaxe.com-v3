import Hero from '@/components/Hero';

export default function Home() {
    return (
        <Hero
            intro="Hello I'm"
            name='Matt Saxe'
            constant='I'
            characteristics={['build software', 'record podcasts', 'read cool books', 'practice MMA']}
            description="I'm a software engineer in Dallas, TX. Unfortunately, I am currently not building any software for clients. I've been working very hard on some other projects though, so feel free to check back here to see what I'm up to. Big things are coming."
            cta={{
                url: '',
                label: 'Reach out',
            }}
        ></Hero>
    );
}

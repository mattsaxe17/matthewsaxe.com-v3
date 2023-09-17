import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Watermark from '@/components/Watermark';

const whatIveBeenUpTo = ['Muay Thai', 'Jiu Jitsu', 'Reading', 'Journaling', 'Building Software', 'Calisthenics', 'Podcasting', 'Climbing', 'Running'];

export default function Home() {
    return (
        <>
            <Watermark text='Saxe'></Watermark>
            <div className='mb-48'>
                <Hero
                    intro="Hello I'm"
                    name='Matt Saxe'
                    constant='I'
                    characteristics={['build software.', 'record podcasts.', 'read books.', 'practice martial arts.']}
                    description="I'm a software engineer in Dallas, TX building meaningful software. I am currently not building any software for clients, but I've been working hard on some other projects!"
                    cta={{
                        url: '/podcast',
                        label: 'Listen to the Pod',
                    }}
                ></Hero>

                <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto'>
                    <SectionHeader prefix='00.' title='About Me' anchor='about'></SectionHeader>

                    <p className='text-secondary-text dark:text-dark-secondary-text mb-10'>
                        If you know me, you know I have long list of interests. I&apos;m passionate about fitness and martial arts, read often, like to cook, and have recently adopted an animal based diet. As you probably guessed, I also have a deep
                        passion for writing software. From websites to FitBit watch faces, I am passionate about problem solving through the medium of code. It all started in 11th grade, where I taught myself HTML, CSS, and Javascript in study
                        hall...
                        <br />
                        <br />
                        These days, I am a software engineer professionally. I am not currently taking any clients, but I have created projects for clients in the past. My experience extends from front-end design to servers and databases, and I love
                        working with complex math, data structures, and algorithms. From simple websites to complex web apps, check out my Github to see what I&apos;m up to these days. (I am still very active on Github)
                        <br />
                        <br />
                        I&apos;m always open to expand my network, so reach out however you&apos;d like - I&apos;d love to talk.
                    </p>

                    <div className='flex flex-col items-center lg:flex-row mb-96'>
                        <div className='max-w-xl'>
                            <p className='mb-2 w-full'>What I&apos;ve been up to lately:</p>
                            <ul className='flex flex-wrap mb-10'>
                                {whatIveBeenUpTo.map(item => (
                                    <li key={item} className='before:content-[url(/arrow.svg);] before:pr-2 text-secondary-text dark:text-dark-secondary-text w-2/4 pl-2'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='w-72 rounded-lg border-primary border-4 lg:mr-16'>
                            <img src='/headshot.jpg' alt='me' className='grayscale transition-all duration-500 translate-x-8 translate-y-10 rounded-md hover:translate-x-0 hover:translate-y-0 hover:scale-110 hover:grayscale-0' />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

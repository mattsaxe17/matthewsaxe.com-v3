import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Watermark from '@/components/Watermark';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export default function Home() {
    return (
        <>
            <Watermark text='Saxe' />
            <Hero
                intro="Hello, I'm"
                name='Matt Saxe'
                constant='I'
                characteristics={['automate your workflows.', 'build custom software.', 'solve business problems.']}
                description="I'm a software engineer in Dallas, TX helping small businesses stop doing things manually. Tell me your problem — I'll build the solution."
                cta={{ url: '/#contact', label: 'Get In Touch' }}
            />

            <ServicesSection />

            <HowItWorks />

            <section id='work' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
                <SectionHeader prefix='03.' title='Past Work' anchor='work' />
                <div className='flex flex-col items-center gap-16 w-full'>
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for the Go Getters podcast. Built with React, Next.js, and Strapi — clients add and edit episodes in the content manager, which are served as static assets generated at build-time for fast loads and cheap hosting.'
                        techStack={['React', 'Next.js', 'Strapi']}
                        projectLink='https://thegogetters.co/'
                    />
                    <Project
                        title='The Villas at Hidden Acres'
                        imageUrl='the-villas.png'
                        description='A fast, responsive site for The Villas living community. Built with React and Gatsby, with content delivery through Contentful — the client updates site content without touching code.'
                        techStack={['React', 'Gatsby', 'Sass']}
                        projectLink='https://the-villas-at-hidden-acres.netlify.app/'
                    />
                </div>
            </section>

            <section id='contact' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24 mb-24'>
                <SectionHeader prefix='04.' title='Get In Touch' anchor='contact' />
                <p className='text-secondary-text dark:text-dark-secondary-text mb-10 max-w-2xl w-full'>
                    Tell me what you&apos;re trying to fix or build. I&apos;ll reach out within one business day to set up a call.
                </p>
                <ContactForm />
            </section>

            <Footer />
        </>
    );
}

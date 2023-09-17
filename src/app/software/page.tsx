import Footer from '@/components/Footer';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import Watermark from '@/components/Watermark';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Software | Matt Saxe',
};

export default function Software() {
    return (
        <>
            <Watermark text='Software'></Watermark>

            <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto pt-48 mb-32'>
                <SectionHeader prefix='00.' title='Career / Side Projects' anchor='about'></SectionHeader>

                <p className='text-secondary-text dark:text-dark-secondary-text mb-16 max-w-screen-lg'>
                    Though I haven&apos;t been actively building software for clients lately, I have been learning many new technologies, studying design patterns, and working on a couple side projects like this one. I am fascinated by software
                    architecture and system design, and I intend to continue learning and growing in this area.
                    <br />
                    <br />
                    In my professional capacity, I work daily with Dotnet Core, SQL Server, React, React Native, Redis, and Docker/Kubernetes with various cloud platforms. I also get the chance to work with Typescript from time to time, which I love.
                    <br />
                    <br />I am committed to continuing to improve my skills, write cleaner code, and learn new technologies. (and make more frequent commits 😬)
                </p>

                <div className='w-72 md:w-96 rounded-lg border-primary border-4 lg:mr-16'>
                    <img src='/code.jpg' alt='me' className='grayscale transition-all duration-500 translate-x-8 translate-y-10 rounded-md hover:translate-x-0 hover:translate-y-0 hover:scale-110 hover:grayscale-0' />
                </div>
            </section>

            <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto'>
                <SectionHeader prefix='01.' title='My Work'></SectionHeader>

                <div className='flex flex-col items-center mb-48 gap-16'>
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for my friends over at the Go Getters podcast. Built using React, Next, and Strapi, it allows the clients to add and edit episodes in the content manager, which are then served as static assets that generate at build-time. This allows for lightning fast loads and cheap hosting.'
                        techStack={['React', 'Next.js', 'Typescript', 'Strapi']}
                    />

                    <Project
                        title='The Villas Homepage'
                        imageUrl='the-villas.png'
                        description="A fast, responsive site for The Villas at Hidden Acres living community. It was built using React and Gatsby, and has content delivery through Contentful's content API. This allows the client to dynamically update site content without changing code."
                        techStack={['React', 'Gatsby', 'Sass']}
                    />

                    <Project
                        title='Ideal Strength Calculator V2'
                        imageUrl='isc.png'
                        description='How much should I be able to bench press? Find out with Ideal Strength Calculator, an easy way to discover your relative strength between several exercises.'
                        techStack={['Vue', 'Nuxt', 'Sass', 'Progressive Web App']}
                    />

                    <Project title='breezy.js' imageUrl='breezyjs.png' description='A javascript library built for making common tasks easier and more readable.' techStack={['Javascript']} />

                    <Project
                        title='Modern Analog Face'
                        imageUrl='watch-face.png'
                        description='A sleek, modern watch face for your FitBit Sense or Versa 3. Featuring step counter, analog and digital times, heart rate monitor, date display, and battery level indicator.'
                        techStack={['SVG', 'FitBit SDK', 'Javascript']}
                    />

                    <Project title='matthewsaxe.com v2' imageUrl='personal-site-v2.png' description='Version 2 of my personal site. All code is available for free on Github.' techStack={['Vue', 'Nuxt', 'Sass']} />

                    <Project
                        title='matthewsaxe.com v3'
                        imageUrl='personal-site-v3.png'
                        description='Version 3 of my personal site - The same aesthetic as V2 but built with a whole new tech stack with tons of new features.'
                        techStack={['React', 'Next.js 13', 'Tailwind', 'MUI']}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Watermark from '@/components/Watermark';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';

const CONTACT_MAILTO = 'mailto:mattsaxe17@gmail.com?subject=Let%27s%20work%20together';

export default function Home() {
    return (
        <>
            <Watermark text='Saxe' />
            <Hero
                intro='AI-first software engineer'
                name='Matt Saxe'
                constant='I'
                characteristics={['build with AI, not around it.', 'ship in days, not months.', 'turn ideas into products.']}
                description="I design, build, and ship production software with an AI-first workflow — delivering in days what used to take a team months. Most recently I built and launched Rollr, a live SaaS, solo. Open to freelance builds and full-time roles."
                cta={{ url: CONTACT_MAILTO, label: 'Get In Touch' }}
                secondaryCta={{ url: '/#work', label: 'See My Work' }}
            />

            <ServicesSection />

            <HowItWorks />

            <section id='work' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
                <SectionHeader prefix='03.' title='Work' anchor='work' />
                <div className='flex flex-col items-center gap-16 w-full'>
                    <Project
                        title='Rollr'
                        imageUrl='rollr.png'
                        description='A live SaaS for painting crews — build material and labor quotes on the job site and generate branded PDF quotes and contracts in seconds. Designed, built, and launched solo with an AI-first workflow: multi-tenant Supabase backend, Stripe billing, and an installable PWA.'
                        techStack={['Next.js', 'TypeScript', 'Supabase']}
                        projectLink='https://userollr.com'
                    />
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for the Go Getters podcast. Built with React, Next.js, and Strapi — clients add and edit episodes in the content manager, which are served as static assets generated at build-time for fast loads and cheap hosting.'
                        techStack={['React', 'Next.js', 'Strapi']}
                        projectLink='https://thegogetters.co/'
                    />
                </div>
            </section>

            <section id='contact' className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24 mb-24'>
                <SectionHeader prefix='04.' title='Get In Touch' anchor='contact' />
                <p className='text-secondary-text dark:text-dark-secondary-text mb-10 max-w-2xl w-full'>
                    Building something, hiring, or just want to talk shop? Email me and I&apos;ll get back to you within a day.
                </p>
                <a
                    href={CONTACT_MAILTO}
                    className='bg-primary inline-block px-6 py-3 rounded text-primary-text dark:text-dark-primary-text font-bold'
                >
                    mattsaxe17@gmail.com
                </a>
            </section>

            <Footer />
        </>
    );
}

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
        <div className='relative min-h-screen overflow-hidden bg-[#252422] text-[#e5e7eb]'>
            <Watermark text='Saxe' />
            <Hero
                intro='AI-first software engineer'
                name='Matt Saxe'
                constant='I'
                characteristics={['build with AI, not around it.', 'ship in days, not months.', 'own the whole stack.']}
                description="I design, build, and ship production software with an AI-first workflow, delivering in days what used to take a team months. Most recently I built and launched Rollr, a live SaaS, solo. Open to freelance builds."
                cta={{ url: CONTACT_MAILTO, label: 'Get In Touch' }}
                secondaryCta={{ url: '/#work', label: 'See My Work' }}
            />

            <ServicesSection />

            <HowItWorks />

            <section id='work' className='relative z-10 mx-auto max-w-[1120px] px-6 pt-24 md:px-16'>
                <SectionHeader prefix='03.' title='Work' anchor='work' />
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <Project
                        title='Rollr'
                        imageUrl='rollr.png'
                        description='A live SaaS for painting crews. Build material and labor quotes on the job site and generate branded PDF quotes and contracts in seconds. Built and launched solo: multi-tenant Supabase backend, Stripe billing, and an installable PWA.'
                        techStack={['Next.js', 'TypeScript', 'Supabase']}
                        projectLink='https://userollr.com'
                    />
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for the Go Getters podcast. An hourly GitHub Action pulls the latest episodes from the Spotify API and videos from the YouTube API, commits the data, and triggers a rebuild, so the site stays current on its own with no CMS to manage.'
                        techStack={['Next.js', 'TypeScript', 'GitHub Actions']}
                        projectLink='https://thegogetters.co/'
                    />
                </div>
            </section>

            <section id='contact' className='relative z-10 mx-auto max-w-[1120px] px-6 pt-28 text-center md:px-16'>
                <span className='font-mono text-[13px] uppercase tracking-[3px] text-primary'>04 · Get In Touch</span>
                <h2 className='mx-auto mb-4 mt-[18px] font-display text-[40px] font-extrabold tracking-[-1.5px] text-[#f4f4f2] md:text-[52px]'>
                    Let&apos;s build something.
                </h2>
                <p className='mx-auto mb-8 max-w-[540px] text-[17px] leading-[1.6] text-[#b7b5b0] md:text-[18px]'>
                    Building something, hiring, or just want to talk shop? Email me and I&apos;ll get back to you within a day.
                </p>
                <a
                    href={CONTACT_MAILTO}
                    className='inline-block rounded-[12px] bg-primary px-8 py-[15px] text-[16px] font-bold text-[#1a1917] hover:text-[#1a1917]'
                >
                    mattsaxe17@gmail.com
                </a>
            </section>

            <Footer />
        </div>
    );
}

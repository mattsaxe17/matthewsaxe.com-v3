import { LuZap, LuLayoutDashboard, LuBrain } from 'react-icons/lu';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        icon: <LuZap />,
        headline: 'Ship in days, not months',
        body: 'I build with an AI-first workflow. AI does the heavy lifting on scaffolding, boilerplate, and iteration while I own the architecture and the details. You get production software in a fraction of the usual time and cost.',
    },
    {
        icon: <LuLayoutDashboard />,
        headline: 'Full-stack, end to end',
        body: 'Postgres schema to pixel: internal tools, dashboards, client-facing apps, and full products, built to fit how your business actually works. Most recently: Rollr, a live SaaS I shipped solo.',
    },
    {
        icon: <LuBrain />,
        headline: 'Real AI, built in',
        body: 'Not a chatbot bolted on the side. I wire LLMs into real workflows: summarize documents, extract data, route decisions, generate content, so the AI does work that matters.',
    },
];

export default function ServicesSection() {
    return (
        <section className='relative z-10 mx-auto max-w-[1120px] px-6 pt-28 md:px-16'>
            <SectionHeader prefix='01.' title='What I Do' anchor='services' />
            <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-3'>
                {services.map(service => (
                    <ServiceCard key={service.headline} icon={service.icon} headline={service.headline} body={service.body} />
                ))}
            </div>
        </section>
    );
}

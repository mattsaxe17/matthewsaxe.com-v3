import { LuZap, LuLayoutDashboard, LuBrain } from 'react-icons/lu';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        icon: <LuZap />,
        headline: 'Stop doing it manually',
        body: "If your team copies data between spreadsheets, sends the same emails every week, or chases approvals by hand — I can automate it. You'll get time back and fewer mistakes.",
    },
    {
        icon: <LuLayoutDashboard />,
        headline: 'Software built for your business',
        body: "Off-the-shelf tools don't always fit. I build internal tools, dashboards, and client-facing apps tailored to how your business actually works.",
    },
    {
        icon: <LuBrain />,
        headline: 'Let AI do the heavy lifting',
        body: 'Use AI to summarize documents, extract data, route decisions, or generate content — integrated into your existing workflow, not bolted on.',
    },
];

export default function ServicesSection() {
    return (
        <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
            <SectionHeader prefix='01.' title='Services' anchor='services' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                {services.map(service => (
                    <ServiceCard key={service.headline} icon={service.icon} headline={service.headline} body={service.body} />
                ))}
            </div>
        </section>
    );
}

import SectionHeader from '@/components/SectionHeader';

const steps = [
    {
        number: '01',
        title: 'Tell me your problem',
        body: 'Fill out the contact form and describe what you\'re trying to fix or build. No jargon needed — plain language is fine.',
    },
    {
        number: '02',
        title: 'I scope and quote it',
        body: "We have a quick call. I ask questions, figure out the best solution, and give you a clear price with no surprises.",
    },
    {
        number: '03',
        title: 'We build and ship',
        body: "I build it, keep you updated along the way, and deliver something that works. You stay in the loop — no black box.",
    },
];

export default function HowItWorks() {
    return (
        <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
            <SectionHeader prefix='02.' title='How It Works' anchor='process' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 w-full'>
                {steps.map(step => (
                    <div key={step.number} className='flex flex-col gap-3'>
                        <span className='text-5xl font-bold text-primary opacity-40'>{step.number}</span>
                        <h3 className='text-xl font-bold text-primary-text dark:text-dark-primary-text'>{step.title}</h3>
                        <p className='text-secondary-text dark:text-dark-secondary-text leading-relaxed'>{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

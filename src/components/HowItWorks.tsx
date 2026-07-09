import SectionHeader from '@/components/SectionHeader';

const steps = [
    {
        number: '01',
        title: 'Tell me the problem',
        body: "Email me and describe what you're trying to build or fix — plain language, no jargon needed.",
    },
    {
        number: '02',
        title: 'I scope it fast',
        body: 'I use an AI-first workflow to go from idea to a working plan quickly, then give you a clear scope and price with no surprises.',
    },
    {
        number: '03',
        title: 'We build and ship — fast',
        body: 'AI-augmented development means production-quality software delivered in days, not months. You stay in the loop the whole way — no black box.',
    },
];

export default function HowItWorks() {
    return (
        <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto py-24'>
            <SectionHeader prefix='02.' title='How I Work' anchor='process' />
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

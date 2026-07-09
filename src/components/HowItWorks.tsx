import SectionHeader from '@/components/SectionHeader';

const steps = [
    {
        number: '01',
        title: 'Tell me the problem',
        body: "Email me and describe what you're trying to build or fix. Plain language, no jargon needed.",
    },
    {
        number: '02',
        title: 'I scope it fast',
        body: 'I use an AI-first workflow to go from idea to a working plan quickly, then give you a clear scope and price with no surprises.',
    },
    {
        number: '03',
        title: 'We build and ship fast',
        body: 'AI-augmented development means production-quality software delivered in days, not months. You stay in the loop the whole way, no black box.',
    },
];

export default function HowItWorks() {
    return (
        <section className='relative z-10 mx-auto max-w-[1120px] px-6 pt-24 md:px-16'>
            <SectionHeader prefix='02.' title='How I Work' anchor='process' />
            <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-3'>
                {steps.map(step => (
                    <div key={step.number}>
                        <p className='mb-2 font-display text-[44px] font-extrabold leading-none text-primary'>{step.number}</p>
                        <h3 className='mb-2 font-display text-[19px] font-bold text-[#f4f4f2]'>{step.title}</h3>
                        <p className='text-[15px] leading-[1.6] text-[#a8a6a1]'>{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

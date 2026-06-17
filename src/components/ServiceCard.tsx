import { ReactElement } from 'react';

type ServiceCardProps = {
    icon: ReactElement;
    headline: string;
    body: string;
};

export default function ServiceCard({ icon, headline, body }: ServiceCardProps) {
    return (
        <div className='flex flex-col gap-4 p-8 rounded-lg bg-primary-bg dark:bg-dark-primary-bg shadow-lg border border-secondary-text/20'>
            <div className='text-4xl text-primary'>{icon}</div>
            <h3 className='text-xl font-bold text-primary-text dark:text-dark-primary-text'>{headline}</h3>
            <p className='text-secondary-text dark:text-dark-secondary-text leading-relaxed'>{body}</p>
        </div>
    );
}

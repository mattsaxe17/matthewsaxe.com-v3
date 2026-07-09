import { ReactElement } from 'react';

type ServiceCardProps = {
    icon: ReactElement;
    headline: string;
    body: string;
};

export default function ServiceCard({ icon, headline, body }: ServiceCardProps) {
    return (
        <div className='rounded-[16px] border border-[#37332e] bg-[#2c2926] p-[26px]'>
            <div className='mb-[18px] flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/[0.14] text-[20px] text-primary'>{icon}</div>
            <h3 className='mb-[10px] font-display text-[20px] font-bold text-[#f4f4f2]'>{headline}</h3>
            <p className='text-[15px] leading-[1.6] text-[#a8a6a1]'>{body}</p>
        </div>
    );
}

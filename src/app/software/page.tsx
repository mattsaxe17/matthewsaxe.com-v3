import Watermark from '@/components/Watermark';
import { Metadata } from 'next';
import { GiDiamondsSmile } from 'react-icons/gi';

export const metadata: Metadata = {
    title: 'Software | Matt Saxe',
};

export default function Software() {
    return (
        <>
            <Watermark text='Software'></Watermark>
            <div className='flex flex-col items-center mb-48'></div>
        </>
    );
}

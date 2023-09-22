import Watermark from '@/components/Watermark';
import { GiDiamondsSmile } from 'react-icons/gi';

export default function NotFound() {
    return (
        <>
            <Watermark text='Boo'></Watermark>
            <div className='w-screen h-screen flex justify-center items-center flex-col gap-5'>
                <p>&quot;The perfect page doesn&apos;t exi...&quot;</p>
                <p>Neither does this one.</p>
                <div className='text-6xl'>
                    <GiDiamondsSmile />
                </div>
                <a className='underline text-primary' href='/'>Go home</a>
            </div>
        </>
    );
}

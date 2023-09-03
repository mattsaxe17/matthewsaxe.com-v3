import Watermark from '@/components/Watermark';
import { GiDiamondsSmile } from 'react-icons/gi';

export default function Blog() {
    return (
        <>
            <Watermark text='Blog'></Watermark>
            <div className='w-screen h-screen flex justify-center items-center flex-col gap-5'>
                <p>I&apos;m an empty page!</p>
                <span className='text-6xl'><GiDiamondsSmile /></span>
            </div>
        </>
    );
}
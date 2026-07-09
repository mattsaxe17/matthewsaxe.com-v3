type WatermarkProps = {
    text: string;
};

export default function Watermark({ text }: WatermarkProps) {
    return (
        <div className='pointer-events-none fixed bottom-4 left-0 -z-10 m-0 whitespace-nowrap p-0 font-mono text-[48vw] font-bold leading-none tracking-[-0.06em] text-white opacity-[0.05] rotate-[-17deg]'>
          {text}
        </div>
    );
}

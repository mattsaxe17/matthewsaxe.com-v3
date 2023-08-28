type WatermarkProps = {
    text: string;
};

export default function Watermark({ text }: WatermarkProps) {
    return (
        <div className='p-0 m-0 fixed -z-20 text-[48vw] leading-tight bottom-4 opacity-10 font-mono rotate-[-17deg] text-secondary-text dark:text-dark-faint-text'>
          {text}
        </div>
    );
}

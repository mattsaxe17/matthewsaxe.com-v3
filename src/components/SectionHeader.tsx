type HeaderProps = {
    prefix?: string;
    title: string;
    anchor?: string;
};

function SectionHeader({ prefix, title, anchor }: HeaderProps) {
    return (
        <div id={anchor} className='mb-10 flex w-full items-center gap-4'>
            {prefix && <span className='font-mono text-[18px] font-bold text-primary'>{prefix.replace('.', '')}</span>}
            <h2 className='whitespace-nowrap font-display text-[28px] font-bold text-[#f4f4f2] md:text-[32px]'>{title}</h2>
            <span className='h-px flex-1 bg-primary opacity-50' />
        </div>
    );
}

export default SectionHeader;

type HeaderProps = {
    prefix?: string;
    title: string;
    anchor?: string;
};

function SectionHeader({ prefix, title, anchor }: HeaderProps) {
    return (
        <div id={anchor} className='flex items-center justify-center pb-10 m-auto w-full'>
            <h2 className='font-bold text-3xl w-full flex items-center whitespace-nowrap gap-3 after:content-[""] after:block after:relative after:h-px after:bg-primary after:w-full'>
                <span className='text-primary text-xl '>{prefix}</span>
                {title}
            </h2>
        </div>
    );
}

export default SectionHeader;

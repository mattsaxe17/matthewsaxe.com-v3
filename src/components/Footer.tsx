export default function Footer() {
    return (
        <footer className='relative z-10 mx-auto mt-24 flex max-w-7xl items-center justify-center border-t border-[#37332e] px-6 py-[26px] md:px-16'>
            <p className='text-[13px] text-[#8b8b8b]'>© {new Date().getFullYear()} Matthew Saxe</p>
        </footer>
    );
}

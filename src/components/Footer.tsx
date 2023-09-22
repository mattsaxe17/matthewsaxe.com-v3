export default function AppBar() {
    return (
        <footer className='h-24 p-2 w-screen bg-primary-bg dark:bg-dark-primary-bg border-t-2 border-t-secondary-text dark:border-t-dark-secondary-text text-secondary-text dark:text-dark-secondary-text flex justify-center items-end'>
            <p className='text-sm'>© {new Date().getFullYear()} Matthew Saxe</p>
        </footer>
    );
}
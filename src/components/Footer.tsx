export default function AppBar() {
    return (
        <div className='w-screen bg-primary-bg dark:bg-dark-primary-bg border-t-2 border-t-secondary-text dark:border-t-dark-secondary-text text-secondary-text dark:text-dark-secondary-text p-10 flex justify-center'>
            <p className='text-sm'>© {new Date().getFullYear()} Matthew Saxe</p>
        </div>
    );
}
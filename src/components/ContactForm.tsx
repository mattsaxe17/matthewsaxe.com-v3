'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [state, setState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

        if (!name || !email || message.length < 20) {
            setErrorMsg('Please fill in all fields. Message must be at least 20 characters.');
            setState('error');
            return;
        }

        setState('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setState('success');
                form.reset();
            } else {
                const data = await res.json();
                setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
                setState('error');
            }
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.');
            setState('error');
        }
    }

    const inputClass = 'w-full px-4 py-3 rounded-lg bg-primary-bg dark:bg-dark-primary-bg border border-secondary-text/30 text-primary-text dark:text-dark-primary-text placeholder:text-secondary-text dark:placeholder:text-dark-secondary-text focus:outline-none focus:border-primary transition-colors';

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input
                    name='name'
                    type='text'
                    placeholder='Your name'
                    required
                    className={inputClass}
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    required
                    className={inputClass}
                />
            </div>
            <textarea
                name='message'
                placeholder="Describe the problem you're trying to solve..."
                required
                minLength={20}
                rows={6}
                className={inputClass}
            />

            {state === 'success' && (
                <p className='text-primary font-medium'>Message sent! I'll be in touch soon.</p>
            )}
            {state === 'error' && (
                <p className='text-red-500'>{errorMsg}</p>
            )}

            <button
                type='submit'
                disabled={state === 'submitting'}
                className='bg-primary text-primary-text dark:text-dark-primary-text font-bold px-8 py-3 rounded-lg self-start hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {state === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
        </form>
    );
}

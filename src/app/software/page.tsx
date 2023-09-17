import Footer from '@/components/Footer';
import Project from '@/components/Project';
import Watermark from '@/components/Watermark';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Software | Matt Saxe',
};

export default function Software() {
    return (
        <>
            <Watermark text='Software'></Watermark>

            <section className='px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto pt-48'>
                <div className='flex flex-col items-center mb-48'>
                    <Project
                        title='The Go-Getters'
                        imageUrl='the-go-getters.png'
                        description='A site for my friends over at the Go Getters podcast. Built using React, Next, and Strapi, it allows the clients to add and edit episodes in the content manager, which are then served as static assets that generate at build-time. This allows for lightning fast loads and cheap hosting.'
                        techStack={['React', 'Next.js', 'Typescript', 'Strapi']}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

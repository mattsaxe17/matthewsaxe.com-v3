import EpisodeCard from '@/components/EpisodeCard';
import Watermark from '@/components/Watermark';
import moment from 'moment';
import { Metadata } from 'next';
import Parser from 'rss-parser';
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsTwitter } from 'react-icons/bs';

const parser = new Parser();

export const metadata: Metadata = {
    title: 'The Matt Saxe Podcast',
};

async function getFeed() {
    const feed = await parser.parseURL(process.env.NEXT_RSS_FEED_URL as string);
    return feed;
}

export default async function Podcast() {
    const feed = await getFeed();

    return (
        <>
            <Watermark text='The Matt Saxe Podcast'></Watermark>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center gap-4 py-32 px-20 mb-16 md:flex-row md:items-start md:justify-center'>
                    <div>
                        <img src={feed.image?.url} alt='' className='w-48 rounded-xl shadow-xl dark:shadow-2xl dark:shadow-black md:w-96' />
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 md:h-full md:justify-start md:items-start text-center md:text-left'>
                        <h1 className='text-4xl text-primary-text dark:text-dark-primary-text text-center pb-4 md:text-left mb-8 font-bold'>{feed.title}</h1>
                        <p className='mb-6'>By {feed.creator}</p>
                        <p className='text-secondary-text text-sm mb-6'>{feed.description}</p>
                        <button className='w-max flex items-center gap-2 p-2 border-primary-text dark:border-dark-primary-text border rounded-full text-lg'>
                            <div>
                                <BsSpotify />
                            </div>
                            <div>Listen on Spotify</div>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col'>
                    {feed.items.map(episode => (
                        <EpisodeCard
                            key={episode.guid}
                            title={episode.title as string}
                            dateString={moment(episode.pubDate).format('MMM DD, YYYY') as string}
                            description={episode.contentSnippet as string}
                            length={episode.itunes.duration}
                            mp3Link={episode?.enclosure?.url as string}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

import EpisodeCard from '@/components/EpisodeCard';
import Watermark from '@/components/Watermark';
import moment from 'moment';
import { Metadata } from 'next';
import { BsSpotify } from 'react-icons/bs';
import { SiGooglepodcasts } from 'react-icons/si';
import { PiApplePodcastsLogoFill } from 'react-icons/pi';
import { AiOutlineAmazon } from 'react-icons/ai';
import PlatformIcon from '@/components/PlatformIcon';
import Footer from '@/components/Footer';
import { GET as getFeed } from './feed/route';

export const metadata: Metadata = {
    title: 'The Matt Saxe Podcast',
};

const availableOn: Array<{ name: string; icon: JSX.Element; link: string }> = [
    { name: 'Amazon Music', icon: <AiOutlineAmazon />, link: 'https://music.amazon.com/podcasts/49048046-8c41-44b6-a7a0-efc081c958c1/the-matt-saxe-podcast' },
    { name: 'Apple Podcasts', icon: <PiApplePodcastsLogoFill />, link: 'https://podcasts.apple.com/us/podcast/the-matt-saxe-podcast/id1696517517' },
    { name: 'Google Podcasts', icon: <SiGooglepodcasts />, link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMzdhYjJkMC9wb2RjYXN0L3Jzcw' },
];

export default async function Podcast() {
    const feed = await getFeed();

    return (
        <>
            <Watermark text='The Matt Saxe Podcast'></Watermark>
            <div className='flex flex-col items-center mb-48'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center gap-4 py-32 px-20 md:flex-row md:items-start md:justify-center'>
                        <div>
                            <img src={feed.image?.url} alt='' className='w-48 rounded-xl shadow-xl dark:shadow-2xl dark:shadow-black md:w-96' />
                        </div>
                        <div className='flex flex-col justify-center items-center p-4 md:h-full md:justify-start md:items-start text-center md:text-left'>
                            <h1 className='text-4xl text-primary-text dark:text-dark-primary-text text-center pb-4 md:text-left mb-8 font-bold'>{feed.title}</h1>
                            <p className='mb-6'>By {feed.creator}</p>
                            <p className='text-secondary-text text-sm mb-6 dark:text-dark-secondary-text'>{feed.description}</p>
                            <button className='w-max flex items-center gap-2 p-2 border-primary-text dark:border-dark-primary-text border rounded-full text-lg mb-8'>
                                <div>
                                    <BsSpotify />
                                </div>
                                <div>Listen on Spotify</div>
                            </button>
                            <p>Also available on:</p>
                            <div className='flex gap-2'>
                                {availableOn.map(platform => (
                                    <PlatformIcon key='link' name={platform.name} icon={platform.icon} link={platform.link} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col max-w-4xl md:mx-24 md:bg-transparent'>
                        {feed.items.map(episode => (
                            <EpisodeCard
                                key={episode.guid}
                                title={episode.title as string}
                                dateString={moment(episode.pubDate).format('MMM DD, YYYY') as string}
                                description={episode.contentSnippet as string}
                                length={episode.itunes.duration}
                                mp3Link={episode?.enclosure?.url as string}
                                image={episode.itunes.image as string}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

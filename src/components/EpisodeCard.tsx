type EpisodeProps = {
    title: string;
    dateString: string;
    description: string;
    length: string;
    mp3Link: string;
};

function EpisodeCard({ title, dateString, description, length, mp3Link }: EpisodeProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{dateString}</p>
        </div>
    );
}

export default EpisodeCard;

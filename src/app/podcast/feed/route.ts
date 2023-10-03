import Parser from 'rss-parser';
const parser = new Parser();

export async function GET() {
    return await parser.parseURL(process.env.NEXT_RSS_FEED_URL as string);
}
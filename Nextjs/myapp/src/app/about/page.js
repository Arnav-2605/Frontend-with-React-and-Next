import Link from 'next/link';

export default function About()
{
    return(
        <div>
            <h3>We are here to help</h3>
            <p>This website is created to explore nextJs</p>
            <Link href="/">Home</Link>
        </div>
    );
}
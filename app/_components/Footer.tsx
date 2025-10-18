import Link from 'next/link';

export const Footer = () => {

    return (
        <div className="bg-gray-200/70 flex rounded-xl p-2 relative gap-2 ">
            <ul className="grow border border-gray-300 pl-2 pr-2 rounded-xl">
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
            </ul>
            <ul className="grow border border-gray-300 pl-2 pr-2 rounded-xl">
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
            </ul>
            <ul className="grow border border-gray-300 pl-2 pr-2 rounded-xl">
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
                <li><Link href="/">Some link</Link></li>
            </ul>
        </div>
    )
}
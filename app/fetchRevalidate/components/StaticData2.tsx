import { Info } from '@/app/_components/Info';

export const StaticData2 = async () => {
    const {text: cashedData} = await fetch('http://localhost:5001/staticData2', { cache: 'force-cache' }).then(data => data.json());

    return (
        <>
            <Info>
                <p>Fetch with <b>force-cache</b> option</p>
                <p>'force-cache' is used with the fetch API to ensure that data is always fetched from the cache (either the Next.js Data Cache or the HTTP cache, depending on the context) and not revalidated on each request. This is particularly useful for static data that doesn't change frequently.</p>
            </Info>
            <p>{cashedData}</p>
        </>
    )
}
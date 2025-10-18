import { Info } from '@/app/_components/Info';

export const StaticData3 = async () => {
    const {text: revalidatedData} = await fetch('http://localhost:5001/staticData3', { next: { revalidate: 30 } }).then(data => data.json());

    return (
        <>
            <Info>
                <p>Fetch with <b>revalidate</b> option (set to 30 sec in this example)</p>
                <p>This will revalidate the data after a specified amount of seconds.</p>
            </Info>
            <p>{revalidatedData}</p>
        </>
    )
}
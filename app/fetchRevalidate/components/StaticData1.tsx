import { Info } from '@/app/_components/Info';

export const StaticData1 = async () => {
    const { text: defaultData } = await fetch('http://localhost:5001/staticData1').then((data) => data.json());

    return (
        <>
            <Info>
                <p>
                    Fetch <b>without</b> cache option
                </p>
            </Info>
            <p>{defaultData}</p>
        </>
    );
};

import { StaticDataForm } from '@/app/fetchRevalidate/StaticDataForm';
import { StaticData1 } from '@/app/fetchRevalidate/components/StaticData1';
import { StaticData2 } from '@/app/fetchRevalidate/components/StaticData2';
import { StaticData3 } from '@/app/fetchRevalidate/components/StaticData3';

export default async function FetchRevalidatePage() {

    return (
        <>
            <h1>Revalidate fetch()</h1>
            <StaticData1 />
            <StaticData2 />
            <StaticData3 />
            <StaticDataForm />
        </>
    )
}
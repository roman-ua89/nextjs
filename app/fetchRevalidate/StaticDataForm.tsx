'use client';

import { updateStaticDataService } from '@/app/services/updateStaticDataService';
import { useEffect, useId, useState } from 'react';
import { revalidatePathService } from '@/app/services/revalidateService';

export const StaticDataForm = () => {
    const [str, setStr] = useState('');
    const id = useId();

    const getData = async () => {
         await fetch('http://localhost:5001/staticData1').then(data => data.json()).then(data => {
             const { text } = data;
             setStr(text);
         })
    }

    useEffect(() => {
       getData()
    }, [])

    return (
        <>
            <h2>Update record</h2>
            <form action={updateStaticDataService} id={id}>
                <div className="mb-2">
                <textarea
                    name="staticData"
                    className="block min-h-[150px] w-[100%]"
                    value={str}
                    onChange={(e) => setStr(e.target.value)}
                ></textarea>
                </div>
            </form>
            <div className="flex gap-2">
                <button className="btn btn-primary" type="submit" form={id}>Update</button>
                <button className="btn btn-primary" onClick={revalidatePathService}>Revalidate Path /fetchRevalidate</button>
            </div>
        </>
    );
};

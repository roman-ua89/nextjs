'use server'

import { redirect } from 'next/navigation';

export const updateStaticDataService = async (formData: FormData) => {
    const text = formData.get('staticData')
    const result1 = await fetch('http://localhost:5001/staticData1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    })

    const result2 = await fetch('http://localhost:5001/staticData2', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    })

    const result3 = await fetch('http://localhost:5001/staticData3', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    })

    if (!result1.ok || !result2.ok || !result3.ok) {
        throw new Error('Error during updating Static Data');
    }

    redirect('/fetchRevalidate');
}
'use client'

import { useState } from 'react';
import { setCookieAction } from '@/app/cookies/actions';

export const AddCookieForm = () => {
    const [formState, setFormState] = useState({ name: '', value: '' });

    const saveData = (formData: FormData) => {
        setCookieAction(formData);
        setFormState({ name: '', value: '' })
    }

    return (
        <>
            <form action={saveData} className="block pb-5 mb-5 border-b border-gray-300">
                <div className="mb-2">
                    <label htmlFor="cookie-name">Name</label>
                    <input
                        value={formState.name}
                        type="text"
                        id="cookie-name"
                        name="name"
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="cookie-value">value</label>
                    <input
                        value={formState.value}
                        type="text"
                        id="cookie-value"
                        name="value"
                        onChange={(e) => setFormState(prev => ({ ...prev, value: e.target.value }))}
                    />
                </div>
                <button className="btn btn-primary" disabled={!formState.name || !formState.value}>Set</button>
            </form>
        </>
    )
}
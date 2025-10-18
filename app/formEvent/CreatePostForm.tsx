'use client';

import { useActionState, useEffect, useState } from 'react';
import { createPostEventService } from '@/app/services/CreatePostEventService';

export const CreatePostForm = () => {
    const [formState, setFormState] = useState({ title: '', body: '' });
    const [state, formAction, isPending] = useActionState(createPostEventService, null);

    useEffect(() => {
        if (state?.success && (formState.title || formState.body)) {
            setFormState({ title: '', body: '' })
        }
    }, [state]);

    return (
        <form className="mb-5 block border-b border-gray-300 pb-5" action={formAction}>
            <div className="mb-4">
                <label htmlFor="post-title">Post title</label>
                <input
                    disabled={isPending}
                    className="block w-[100%]"
                    type="text"
                    id="post-title"
                    name="title"
                    value={formState.title}
                    onChange={(e) =>
                        setFormState((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }))
                    }
                />
            </div>
            <div className="mb-4">
                <label htmlFor="post-title">Post body</label>
                <textarea
                    disabled={isPending}
                    className="block min-h-[200px] w-[100%]"
                    id="post-body"
                    name="body"
                    value={formState.body}
                    onChange={(e) =>
                        setFormState((prev) => ({
                            ...prev,
                            body: e.target.value,
                        }))
                    }
                />
            </div>
            {state?.success === true && <div className="text-green-500">{state.message}</div>}
            {state?.success === false && <div className="text-red-500">{state.message}</div>}
            {isPending && <div className="text-green-500">Request is pending...</div>}
            <button
                disabled={!formState.title || !formState.body || isPending}
                type="submit"
                className="btn btn-primary"
            >
                Create
            </button>
        </form>
    );
};

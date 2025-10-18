'use server'

export const createPostService = async (formData: FormData) => {
    const title = formData.get('title');
    const body = formData.get('body');

    const response = await fetch('http://localhost:5001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body, likes: 0})
    })

    if (!response.ok) {
        throw new Error('Can not create a post' + title)
    }

    return await response.json();
}
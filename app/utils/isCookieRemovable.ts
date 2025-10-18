'use server'

export const isCookieRemovable = async (name: string) => {
    const patterns = ['phpstorm', 'web', 'next'];
    let isRemovable = true;

    patterns.forEach(pattern => {
        if (name.toLowerCase().includes(pattern)) {
            console.log('found name', name);
            isRemovable = false;
            return;
        }
    })

    return isRemovable;
}
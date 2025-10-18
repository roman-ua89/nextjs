
export const getDataWithError = async () => {
    const res = await fetch('https://example.com/api/unreliable-data');

    if (!res.ok) {
        throw new Error('Can\'t retrieve data')
    }

    return res.json();

}
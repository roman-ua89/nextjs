import {IPostItem} from "@/app/types";
import {getErrorMsg} from "@/app/services/getErrorMsg";

export const getComparedPosts = async (ids: string[]): Promise<IPostItem[]> => {
    try {
        const promises = ids.map(id => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => data.json());
        });

        return await Promise.all([...promises]);
    } catch (e) {
        throw new Error(`impossible to get compare results. ${getErrorMsg(e)}`);
    }
}
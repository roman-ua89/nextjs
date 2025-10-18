import {IPostItem} from "@/app/types";

export const getPostsService = async (): Promise<IPostItem[]> => {
    return fetch('http://localhost:5001/posts')
        .then((response) => response.json())
}

export interface IPostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface RRR {
    type: 'resolve' | 'reject';
    delay: number;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    likes: number;
}

export type LikeAction = 'up' | 'down';

export interface IFetchOperationStatus {
    success: boolean;
    message: string;
}
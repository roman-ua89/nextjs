import { RRR } from '@/app/types';


export const ResolveOrRejectRequest = ({type, delay}: RRR): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 'resolve') {
                return resolve('resolved data');
            }
            return reject('rejected data');
        }, delay);
    });
}
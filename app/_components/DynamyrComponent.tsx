import { ResolveOrRejectRequest } from '@/app/services/resolveOrRejectRequest';
import { RRR } from '@/app/types';

export const DynamicComponent = async ({ type, delay }: RRR) => {
    const data = await ResolveOrRejectRequest({ type, delay });

    return (
        <div className="bg-blue-100 p-2 rounded-sm mb-4 border-1 border-blue-200">
            Loaded data: {data}
        </div>
    )
}
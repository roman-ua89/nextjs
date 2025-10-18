'use client'

export const SimpleClientComponent = ({children}: {children: React.ReactNode}) => {

    return (
        <div className="bg-amber-200 p-2 rounded-sm">
            <span className="font-bold">Client component</span>
            {children}
        </div>
    )
}
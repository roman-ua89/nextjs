import React from "react";

interface IProps {
    name: string;
    children: React.ReactNode;
    // baseColor: string;
}

export const ContainerLabel = ({name, children}: IProps) => {
    return (
        // <div className={`bg-${baseColor}-50 border-5 border-${baseColor}-300 rounded-md`}>
        //     <span className={`font-bold text-${baseColor}-600 text-sm block bg-${baseColor}-300`}>{name}</span>
        //     {children}
        // </div>
        <div className={`bg-gray-50 border-5 border-gray-200/50 rounded-md`}>
            <span className={`font-bold text-gray-500 text-xs block bg-gray-200/50 mb-2 pb-1`}>{name}</span>
            <div className="p-2">{children}</div>

        </div>
    )
}
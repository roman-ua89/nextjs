import {ContainerLabel} from "@/app/_components/ContainerLabel";


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ContainerLabel name="Template for Posts">
            {children}
        </ContainerLabel>
    )
}
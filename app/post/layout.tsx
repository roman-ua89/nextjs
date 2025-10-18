import {ContainerLabel} from "@/app/_components/ContainerLabel";

export default function BlogLayout({
       children,
    }: {
    children: React.ReactNode
}) {
    return (
        <ContainerLabel name="Layout for Post only">
            <section>{children}</section>
        </ContainerLabel>
    )
}
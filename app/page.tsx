import { Header } from '@/app/_components/Header/Header';
import Link from 'next/link';
import { SimpleClientComponent } from '@/app/_components/SimpleClientComponent';
import { SimpleServerComponent } from '@/app/_components/SimpleServerComponent';
import { Footer } from '@/app/_components/Footer';
import { ContainerLabel } from '@/app/_components/ContainerLabel';
import { LeftMenu } from '@/app/_components/LeftMenu';
import { PostsWrapper } from '@/app/_components/PostsWrapper';

export default function Home() {
    return (
        <ContainerLabel name="Main content">
            <PostsWrapper />
            <div className="bg-amber-100 p-2 font-bold">
                Outer container is a Server component
                <SimpleClientComponent>
                    <SimpleServerComponent />
                </SimpleClientComponent>
            </div>
        </ContainerLabel>
    );
}

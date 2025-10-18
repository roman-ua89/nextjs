import Link from "next/link";
import Image from "next/image";
import {styles} from "./styles";
import LoadingIndicator from "@/app/_components/loading-indicator";
import {ThemeSwitcher} from "@/app/_components/Header/ThemeSwitcher";

export const Header = async () => {

    return (
        <header className="bg-gray-200/70 block rounded-xl p-2 relative mb-4">
            <ThemeSwitcher />
            <Image
                className="dark:invert block ml-auto mr-auto mb-2"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <ul className="flex justify-center gap-4">
                <li>
                    <Link href='/' className={styles["menu-item"]}>Home</Link>
                </li>
                <li>
                    <Link href='/posts' className={styles["menu-item"]} prefetch={false}>Posts <LoadingIndicator /></Link>
                </li>
                <li>
                    <Link href='/posts/nested' className={styles["menu-item"]}>Nested routes</Link>
                </li>
                <li>
                    <Link href='/login' className={styles["menu-item"]}>Login</Link>
                    {/*<HoverPrefetchLink href='/login'>Login</HoverPrefetchLink>*/}
                </li>
            </ul>

        </header>
    )
}
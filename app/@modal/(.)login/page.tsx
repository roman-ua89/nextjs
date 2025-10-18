'use client';

import {useRouter} from "next/navigation";
import {useEffect, useRef} from "react";
import {LoginForm} from "@/app/login/LoginForm";

export default function LoginModal() {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, [])

    return (
        <dialog
            ref={dialogRef}
            onClose={() => router.back()}
            className="border p-4 rounded backdrop:bg-slate-300/50"
        >
            <button
                className="absolute top-2 right-4 border-none"
                onClick={() => dialogRef.current?.close()}
            >
                &times;
            </button>
            <h1>Login</h1>
            <LoginForm />
        </dialog>
    )
}
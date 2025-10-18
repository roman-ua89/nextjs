'use client'

import Image from 'next/image';
import { Info } from '@/app/_components/Info';
import wide from '../../public/images/wide.jpeg';

export default function Page() {
    return (
        <>
            <h1>Image Optimization</h1>
            <Info>
                <p>
                    The Next.js <i>Image</i> component extends the HTML 'img'
                    element to provide:
                </p>
                <p>If src is a static import of a jpg, png, webp, or avif file, blurDataURL is added automatically—unless the image is animated.</p>
                <ul>
                    <li>
                        <b>Size optimization:</b> Automatically serving
                        correctly sized images for each device, using modern
                        image formats like WebP.
                    </li>
                    <li>
                        <b>Visual stability:</b> Preventing layout shift
                        automatically when images are loading.
                    </li>
                    <li>
                        <b>Faster page loads:</b> Only loading images when they
                        enter the viewport using native browser lazy loading,
                        with optional blur-up placeholders.
                    </li>
                    <li>
                        <b>Asset flexibility:</b> Resizing images on-demand,
                        even images stored on remote servers.
                    </li>
                </ul>
            </Info>
            <div className="mb-2">
                <Image
                    src={wide}
                    alt="wide image"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
            <div className="flex gap-2 mb-2">
                <div className="">
                    <Image
                        src="/images/img_1.jpeg"
                        alt="img 1"
                        width={400}
                        height={300}
                        className="block"
                        onLoad={(e) => console.log(e)}
                    />
                </div>
                <div className="">
                    <Image
                        src="/images/img_2.jpeg"
                        alt="img 1"
                        width={400}
                        height={300}
                        className="block"
                    />
                </div>
            </div>
            <div className="flex gap-2 mb-2">
                <div className="">
                    <Image
                        src="/images/img_3.jpeg"
                        alt="img 3"
                        width={400}
                        height={300}
                        className="block"
                    />
                </div>
                <div className="">
                    <Image
                        src="/images/img_4.jpeg"
                        alt="img 4"
                        width={400}
                        height={300}
                        className="block"
                    />
                </div>
            </div>
            <div className="flex gap-2 mb-2">
                <div className="">
                    <Image
                        src="/images/img_5.jpeg"
                        alt="img 5"
                        width={400}
                        height={300}
                        className="block"
                    />
                </div>
                <div className="">
                    <Image
                        src="/images/img_6.jpeg"
                        alt="img 6"
                        width={400}
                        height={300}
                        className="block"
                    />
                </div>
            </div>
        </>
    );
}

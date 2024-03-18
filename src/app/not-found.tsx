"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function NotFound() {
  const pathname = usePathname()
  const isBlogPost = (pathname.includes('blog'))
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            {
              isBlogPost ? (
                <h2>I {`don't `} think {`that's `} a valid blog post</h2>
              ) : (
                <h2>404 - The Page {`can't`} be found</h2>
              )
            }

          </div>
          <Link href={`/`}>Go To Homepage</Link>
        </div>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  );
}

import dynamic from "next/dynamic";
const Blogs = dynamic(() => import("@/src/components/BlogPage"));
import { Helpers } from "@/Helpers";
import { blogPostType } from "@/Helpers/types";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
export const metadata: Metadata = {
    title: "MOE - Frontend Web Developer | Blog",
    description:
        "Moe's Blog posts, including lifestyles, technology, latest frontend trends.",
    keywords:
        "Moe, Moses Chukwudi Nwigberi, Web Developer, blog, blog posts, posts, blogs, Lagos, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Moe's Portfolio",
};

const Blog = async () => {
    const blog = (await Helpers.getData3()) as blogPostType[];
    return (
        <Suspense fallback={<Loading />}>
            <Blogs blog={blog} />
        </Suspense>
    )
}

export default Blog
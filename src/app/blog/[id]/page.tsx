import { Helpers } from "@/Helpers";
import { blogPostType } from "@/Helpers/types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const BlogSingle = dynamic(() => import("@/src/components/Blog"));

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const single = (await Helpers.getSingleBlog(params.id)) as blogPostType;
    return {
        title:
            "MOE - Frontend Web Developer | Blog Posts" +
            (single ? ` | ${single.title}` : ""),
        description:
            "More details about blog posts I have written. Portfolio page for Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
        keywords:
            "Moe, Moses Chukwudi Nwigberi,posts, blog, blogpost, Web Developer, works, projects, Lagos, Ebonyi State, Nigeria",
        authors: [{ name: "Moses Chukwudi Nwigberi" }],
        creator: "Moses Chukwudi Nwigberi",
        applicationName: "Moe's Portfolio",
    };
}

const Blog = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const single = (await Helpers.getSingleBlog(id)) as blogPostType;

    if (!single) {
        notFound();
    }
    return (
        <BlogSingle single={single} />
    )
}

export default Blog
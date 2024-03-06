import dynamic from "next/dynamic";
const Blogs = dynamic(() => import("@/src/components/BlogPage"));
import { Helpers } from "@/Helpers";
import { blogPostType } from "@/Helpers/types";

const Blog = async () => {
    const blog = (await Helpers.getData3()) as blogPostType[];
    return (
        <Blogs blog={blog} />
    )
}

export default Blog
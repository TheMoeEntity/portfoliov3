"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import moe from '../../../public/images/profile.jpg'
import moe2 from '../../../public/images/coffee.jpg'
import moe3 from '../../../public/images/services.webp'
import { useRouter } from "next/navigation";
import { blogPostType } from "@/Helpers/types";

const BlogPage = ({ blog }: { blog: blogPostType[] }) => {
    const { push } = useRouter()
    const assets = [
        {
            img: moe
        },
        {
            img: moe2,
        },
        {
            img: moe3
        }
    ]
    return (
        <div id="projects" className={styles.services}>
            <h1 className={styles.title}>Blog</h1>
            <section>
                <h1>My Blog Posts</h1>

            </section>
            <div className={styles.blogGrid}>
                {
                    blog.map((x, i) => (
                        <div key={i}>
                            <div className={styles.img}>
                                <div className={styles.overlay}>
                                    <div onClick={() => push('/blog/' + x.slug)}>
                                        READ MORE
                                    </div>
                                </div>
                                <Image
                                    src={'/images/' + x.banner[0]}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    alt={"Banner picture for " + x.title}
                                    fill
                                    quality={100}
                                    priority={true}
                                    sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.deets}>
                                <div className={styles.timeStamp}>
                                    <span>{x.date}</span>
                                </div>
                                <h5 className="h5 mt-4">{x.title}</h5>
                                <p className="mt-4">
                                    {x.posts[0].texts[1].split(/\s+/).slice(0, 20).join(" ") + "..."}
                                </p>
                            </div>
                        </div>
                    ))
                }
                <i className={styles.aria} aria-hidden></i>
                <i className={styles.aria} aria-hidden></i>
            </div>
        </div>
    );
};

export default BlogPage;

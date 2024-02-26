"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import moe from '../../../public/images/profile.jpg'
import moe2 from '../../../public/images/coffee.jpg'
import moe3 from '../../../public/images/services.webp'
import { useRouter } from "next/navigation";

const BlogPage = () => {
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
                    assets.map((x, i) => (
                        <div key={i}>
                            <div className={styles.img}>
                                <div className={styles.overlay}>
                                    <div onClick={() => push('/blog/my-laptop-and-i')}>
                                        READ MORE
                                    </div>
                                </div>
                                <Image
                                    src={x.img}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    alt={"Profile of " + "moe"}
                                    fill
                                    quality={100}
                                    priority={true}
                                    sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.deets}>
                                <div className={styles.timeStamp}>
                                    <span>February 26, 2024.</span>
                                </div>
                                <h5 className="h5 mt-4">My Laptop and I: A Love Story of Code and Chill</h5>
                                <p className="mt-4">
                                    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove
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

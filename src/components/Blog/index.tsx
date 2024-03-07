"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import { blogPostType } from "@/Helpers/types";

const Blog = ({ single }: { single: blogPostType }) => {
    return (
        <div id="projects" className={styles.services}>
            <h1 className={`${styles.title}`}>Posts</h1>
            <section className={`${styles.blogTitle}`}>
                <h1>{single.title}</h1>
            </section>
            <div className={styles.projects}>
                <div>
                    <div className={styles.img}>
                        <div className={styles.overlay}></div>
                        <Image
                            src={'/images/' + single.banner[1]}
                            style={{
                                objectFit: "cover",
                            }}
                            alt={
                                "Banner of blog post"
                            }
                            fill
                            quality={100}
                            priority={true}
                            sizes="(max-width: auto) 100vw, (max-width: auto) 50vw, 33vw"
                        />
                    </div>
                    <div className={`${styles.details} ${styles.blogTexts}`}>
                        <div>
                            {
                                single.posts.map((x, i) => (
                                    <div key={i}>
                                        <div>
                                            <span className="h3">{x.chapter}</span>
                                            {
                                                x.texts.map((x, i) => (
                                                    <>
                                                        {
                                                            i === 0 && x != '' ? (
                                                                <article>
                                                                    <aside>
                                                                        <b>
                                                                            {x}
                                                                        </b>
                                                                    </aside>
                                                                    <br /> <br />
                                                                </article>) : (
                                                                <article>
                                                                    {x} <br /> <br />
                                                                </article>
                                                            )
                                                        }
                                                    </>
                                                ))
                                            }

                                        </div> <br />
                                    </div>
                                ))
                            }
                            <div style={{ color: 'black', fontWeight: 'bolder' }} className={`${styles.end} ${styles.skillSet}`}>
                                <strong>{single.end}</strong>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
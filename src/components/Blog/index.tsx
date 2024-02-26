"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import moe from '../../../public/images/danielwylde.png'
import moe2 from '../../../../public/images/coffee.jpg'
import moe3 from '../../../../public/images/services.webp'
import { useRouter } from "next/navigation";

const Blog = () => {
    return (
        <div id="projects" className={styles.services}>
            <h1 className={styles.title}>Posts</h1>
            <section>
                <h1>My Laptop and I: A Love Story of Code and Chill</h1>
            </section>
            <div className={styles.projects}>
                <div>
                    <div className={styles.img}>
                        <div className={styles.overlay}></div>
                        <Image
                            src={moe}
                            style={{
                                objectFit: "cover",
                            }}
                            alt={
                                "Blog Pic"
                            }
                            fill
                            quality={100}
                            priority={true}
                            sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
                        />
                    </div>
                    <div className={styles.details}>
                        <div>
                            <p>
                                <span className="h3">Introduction: The Dynamic Duo</span>
                                In the bustling city of Lasgidi, past the stress, the traffic, scorching sun and amidst the whirlwind of tech innovation, there exists a dynamic duo {`that's`} taking the web development scene by storm - me and my trusty MacBook pro. Our bond is stronger than CSS grids and JavaScript closures combined, and our adventures in coding are as legendary as the Nigerian sunsets. I really can not emphasize just how much I love my computer, like an extension of me.
                            </p> <br />
                            <p>
                                <span className="h3">Mastering the Basics:</span>
                                <i><b>Venturing into the Coding World</b> </i> <br /> <br />
                                Picture this: {`it's`} a typical Lagos evening, the sounds of bustling streets and vibrant markets fill the air. While others unwind with traditional beats and spicy jollof rice, I seek solace in the glow of my MacBook screen, a beacon of creativity and endless possibilities. <br /> <br />
                                Oh, the memories of my coding infancy! Trying to figure out the difference between margin and padding was like trying to decipher the Lagos traffic patterns - confusing, but ultimately rewarding. I remember those days vividly, just after wrapping up my WAEC exams. My older brother - may his soul rest in eternal peace - took it upon himself to steer me into the world of web development. Picture this: a cramped workspace with two mismatched chairs, a cluttered desk, and a single computer screen illuminating the room. It was in this cozy chaos that my coding journey began. <br /> <br />

                                Armed with determination and a cup of lukewarm tea (courtesy of yours truly), my brother inundated me with a deluge of HTML and CSS video tutorials. And let me tell you, it was like diving headfirst into the deep end of the coding pool. At first, the waters were murky, and the waves of information threatened to overwhelm me. <br /> <br />
                                CSS, in particular, was a formidable foe. Wrestling with layouts, grappling with floats - it was enough to make {`anyone's`} head spin. And oh, the agony of mastering CSS positioning! It felt like trying to wrangle a herd of unruly goats into formation. But with each setback came a valuable lesson, and with each lesson, a step closer to mastery. <br /> <br />
                                Now, looking back, I {`can't`} help but chuckle at the memories of those early struggles. My brother, bless his heart, was my harshest critic. His feedback was like a double-edged sword - razor-sharp and mercilessly honest. {`He'd`} glance over my fledgling code, his brow furrowed in concentration, before delivering his verdict with the finesse of a seasoned judge. <br /> <br />
                                {`"Interesting attempt,"`} {`he'd`} say, his tone dripping with sarcasm. {`"But let's `}just say, the internet {`isn't`} ready for your avant-garde approach to CSS just yet.{`"`} <br /> <br />
                                Oh, the ego-shattering, soul-crushing critiques! But in hindsight, I realize it was all part of the journey. Every setback, every moment of frustration, only fueled my determination to improve. And for that, {`I'll`} forever be grateful to my brother, my mentor, my toughest critic, and my biggest cheerleader. <br /> <br />

                                So {`here's`} to you, dear brother, for igniting the spark that set my coding journey ablaze. Your guidance, your patience, and yes, even your brutally honest feedback, have shaped me into the developer I am today. Though you may no longer be by my side, your spirit lives on in every line of code I write. And for that, I am eternally grateful.
                            </p> <br />
                            <p>
                                <span className="h3">Conquering New Horizons:</span>
                                <i><b>I am exploring new technologies.</b> </i> <br /> <br />
                                Mastering HTML, CSS, and JavaScript was just the beginning of our journey. We ventured into the uncharted territories of TypeScript, forging new paths in the realm of frontend development. And when Next.js entered the scene, it was like discovering a hidden treasure - smooth, efficient, and oh-so-satisfying.
                            </p> <br />
                            <p>
                                <span className="h3">Embaracing Challenges:</span>
                                <i><b>Navigating the Ups and Downs</b> </i> <br /> <br />
                                But our thirst for knowledge knows no bounds. Currently, {`we're`} dipping our toes into the waters of PHP and Vue.js, eager to expand our repertoire and conquer new challenges. {`It's`} a wild ride, filled with unexpected bugs, late-night debugging sessions, and occasional moments of triumph that make it all worthwhile.
                            </p> <br />

                            <p>
                                <span className="h3">Life Beyound the Screen:</span>
                                <i><b>Finding balance in this crazy world.</b> </i> <br /> <br />
                                Outside of the coding realm, {`I'm`} a true outdoorsy soul. Whether {`it's`} hiking through the lush greenery of Lekki Conservation Centre or enjoying a beachside bonfire with friends and family, I find joy in embracing the beauty of nature.
                            </p> <br />

                            <p>
                                <span className="h3">Unwinding in Style:</span>
                                <i><b>Cheers to liquid motication.</b> </i> <br /> <br />
                                And {`let's `}not forget about my favorite pastime: indulging in a beer or two to unwind after a long day of coding. Because {`let's`} face it, even the most seasoned developer needs a little liquid motivation every now and then.
                            </p> <br />

                            <p>
                                <span className="h3">{`Here's`} to Us:</span>
                                <i><b>Thriving in the Coding Universe.</b> </i> <br /> <br />
                                As for my MacBook, {`it's`} not just a tool - {`it's`} an extension of myself. Together, {`we're`} a dynamic duo, tackling challenges, sharing laughs, and making memories one line of code at a time. So {`here's`} to us, my dear MacBook, may our love story of code and chill continue to thrive in the ever-evolving landscape of technology.
                            </p> <br />
                            <div style={{ color: 'black', fontWeight: 'bolder' }} className={styles.skillSet}>
                                <strong>P.S. If you ever spot a developer in Lagos glued to their MacBook, chances are {`it's`} me - living, breathing, and coding my way through life, one keystroke at a time.</strong>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
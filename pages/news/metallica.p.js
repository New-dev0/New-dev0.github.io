import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Metallica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Metallica"/>
        <meta name="description" content="Trending News about Metallica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Metallica</h1>
            <Image width={800} height={500} src="https://www.metaledgemag.com/.image/t_share/MTk0MDcxMjYyMTIzNzk2MTQ1/phil-anselmo-2018.jpg" alt="Metallica"/>
            <h3>Recent News</h3>
            <a href='https://www.metaledgemag.com/metal-wire/metallica-announce-north-american-tour-dates-with-pantera'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announce North American tour dates with Pantera</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRps-POGHz_6Z0iVh8kK_9Wzn1ZKnDMleOOXVfqFXJfLi7NU17jKQEmKZsQ8YnMyNgFR2JZyqoB" alt="Metallica announce North American tour dates with Pantera" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pre-sale tickets are on sale November 30 at 9 a.m. local times, with more info available here. You can check out the full itinerary below. Metallica 2023 tour&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newyorker.com/magazine/2022/12/05/the-enduring-metal-genius-of-metallica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Enduring Metal Genius of Metallica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_H6Azk_YbpWts7ScYwdnxoWgKVnypnMQApvA9u6UQGTz1NGWczEjilh7XU1uxnOn78jv1ZI1C" alt="The Enduring Metal Genius of Metallica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica&#39;s current lineup includes the singer and rhythm guitarist James Hetfield and the drummer Lars Ulrich, both of whom co-founded the band; the lead&nbsp;...</p></div>
            </div>
        </a><a href='https://www.billboard.com/culture/product-recommendations/metallica-wolverine-giving-tuesday-collaboration-shop-1235178348/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica &amp; Wolverine Celebrate &#39;Giving Tuesday&#39; With a New Collab ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9G3nn_f0JfSm2dtd7ksUn6IK8LQohuJKKPcOkK9YG7fNXHGKJjykxOi75O8QW0hK0RBiUvtCq" alt="Metallica &amp; Wolverine Celebrate &#39;Giving Tuesday&#39; With a New Collab ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This latest collaboration, featuring collectible artwork from artist and Metallica collaboration Brandon Heart, marks the third consecutive year that Metallica&nbsp;...</p></div>
            </div>
        </a><a href='https://www.music-news.com/news/UK/154055/Metallica-return-with-new-album-and-mammoth-world-tour'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica return with new album and mammoth world tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRN-HRnj_Czn2i05BNiugnpVlFIhpCbZmrVvgDjexYwi90JX2P8aTle0sSEi42LlvCSVLQWjvjC" alt="Metallica return with new album and mammoth world tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica return with new album and mammoth world tour - The Number One music magazine feat. band &amp; artist news, reviews, interviews, videos &amp; gossip UK&nbsp;...</p></div>
            </div>
        </a><a href='https://variety.com/2022/music/news/metallica-new-album-72-seasons-world-tour-1235443111/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica Announces New Album, &#39;72 Seasons,&#39; and Two-Year ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTO2_32ddEg867dZfZap6HzSDRoU0Mx1VMpXOpVI6VE73YjVcv6bDAYCgVpIyPYHfye-pptZE9C" alt="Metallica Announces New Album, &#39;72 Seasons,&#39; and Two-Year ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica has dropped the first single from its forthcoming 12th studio album, &#39;72 Seasons,&#39; and unveiled tour dates for the next two years.</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/lux-aeterna-metallica-meaning'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Is the Meaning of Metallica&#39;s New Song &quot;Lux Aeterna&quot;?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSy28HlYhbzHMrOLeFfXQ4gwzXFUbW_C31WjI7qiQ9BqDnQpmU6FBQZ9aDQ7CXoa-XV24xc8oz2" alt="What Is the Meaning of Metallica&#39;s New Song &quot;Lux Aeterna&quot;?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If there&#39;s one undisputed king of heavy metal music nowadays, it goes without saying that its Metallica. The San Fransisco-based creation of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/entertainment/metallica-drummer-talks-master-puppets-collaboration-stranger-things'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica drummer talks how their &#39;Master of Puppets&#39; collaboration ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3VoqevVNenLjTE8SxOi5O97hgqWZQAwT1eQZAxJ_MUPQ-yL3Nld7qPuwY1WSYQ7ztg6H4wEbp" alt="Metallica drummer talks how their &#39;Master of Puppets&#39; collaboration ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lee Ulrich, Metallica&#39;s drummer spoke about how the famous Eddie Munson &quot;Master of Puppets&quot; scene came to be in the &quot;Stranger Things&quot; season four finale.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/quentinsinger/2022/11/28/metallica-announce-new-album--2203--2024-world-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica Announce New Album &amp; 2023-2024 World Tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNp4qhzVT-abU9TlJNNofZo8E2aTqaHLHIW-Wu4AMavj5s8mj5uxXpqBS3SDstyWkuqRh5_x28" alt="Metallica Announce New Album &amp; 2023-2024 World Tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just as 2022 was coming to a close, Metallica has decided taken the internet by storm with the surprise announcement of their next studio album,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/entertainment/music/2022/11/28/metallica-2023-concerts-phoenix/69682006007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica announces 2 concerts in metro Phoenix. Everything fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-Re6AD_-qQhJxfjCbdSvTESGabTNkSJPkeh_kEDFtakE2DqvGpAW4N10MamxsgdrC6_SF7xrK" alt="Metallica announces 2 concerts in metro Phoenix. Everything fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metallica&#39;s M72 tour comes to Glendale in 2023. The No Repeat Weekend features Pantera, Five Finger Death Punch, Mammoth WVH and Ice Nine Kills.</p></div>
            </div>
        </a><a href='https://loudwire.com/metallica-stranger-things-lars-ulrich-howard-stern-interview-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lars Ulrich Reveals How Metallica + &#39;Stranger Things&#39; Collab ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeqeOlAakCOovmeV84GU6m5eJWBVLvBwX-yCbTVXWKJKWmKIufXRhYyIXvm8rIXg3MZIw_Dy5s" alt="Lars Ulrich Reveals How Metallica + &#39;Stranger Things&#39; Collab ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Watch the video down toward the bottom of this post. &quot;That was such a mindfuck of an experience this summer,&quot; Ulrich tells host Howard Stern. &quot;It used to be,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
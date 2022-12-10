import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trevor Noah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trevor Noah"/>
        <meta name="description" content="Trending News about Trevor Noah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trevor Noah</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221209121445-trevor-noahs-120822.jpg?c=16x9&q=w_800,c_fill" alt="Trevor Noah"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/12/09/entertainment/trevor-noah-daily-show-final-episode/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah celebrates his last episode hosting &#39;The Daily Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFbLFXJQdRLAAhHqgb8xGDYsbsXuWo9uXPTW5H9GkxZNYrrLM3WK4MDa01hmXQGX8zbos4zf2M" alt="Trevor Noah celebrates his last episode hosting &#39;The Daily Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Noah&#39;s final night as host of Comedy Central&#39;s satirical news report &quot;The Daily Show&quot; celebrated his 7-year anchoring tenure and featured a packed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/trevor-noah-the-daily-show-signs-of-for-last-time-praises-black-women-for-his-success-on-final-episode/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah praises Black women for his success while signing off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFPcKu-XK9FcpEutFqqLgmPcePlZpEIDWdA8O9z1_gUY8lqamIpiqe6GOGy8S8NONMbbzDNBSf" alt="Trevor Noah praises Black women for his success while signing off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Noah bid an emotional farewell to &quot;The Daily Show,&quot; which he has hosted since 2015, on Thursday. During the emotional sendoff, the comedian gave &quot;a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/12/trevor-noah-daily-show-finale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah Says Goodbye to &#39;The Daily Show&#39; With Nostalgic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVKZtNqjDtkqwpOFxr4-S7P0JUsssDcTZGp9XS3QgOQPNyM73G2t80WsLvXFFr4icmcevGBST6" alt="Trevor Noah Says Goodbye to &#39;The Daily Show&#39; With Nostalgic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With cameos from Oprah, Issa Rae, Tracee Ellis Ross, Vice President Kamala Harris, and more.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/09/arts/television/trevor-noah-daily-show-final-episode.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah&#39;s Optimism Set His Version of &#39;The Daily Show&#39; Apart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVBWuSsVfTbJTRv4kfct-BUFLtlTWAv9IjbgiBiCS1TMnGiaNgebyvq9TSS5EoVy6_J8VS9tG9" alt="Trevor Noah&#39;s Optimism Set His Version of &#39;The Daily Show&#39; Apart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Though his final episode made the mysterious reason for his departure a running joke, his specials and memoir suggest he was always comfortable with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crowrivermedia.com/national/entertainment/trevor-noah-thanks-hate-watchers-of-the-daily-show/article_d2d29d78-cc1c-5ab4-b797-e2f74f13a3a7.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah thanks &#39;hate-watchers&#39; of The Daily Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvMWLAIFW1TBMW1MSdIdSDzkMrr-7BHnSAn2fhi4RIyfIjKjLczMBbt45WC48rvtIp4IMdoCoq" alt="Trevor Noah thanks &#39;hate-watchers&#39; of The Daily Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 38-year-old comedian ended his seven-year run as the show&#39;s host on Thursday (12.08.22), and Trevor thanked everyone who has played a role in the program&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vulture.com/article/what-trevor-noah-leaving-means-for-the-daily-show-future.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Daily Show Says Good-bye to Trevor Noah</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReWKLeLOgQ36HwzwPL2UvjkPk25g8p1bYhjbDq_n_GIpk61gUgtMAFRwmScMc5L6L1wNlsDUbH" alt="The Daily Show Says Good-bye to Trevor Noah" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Noah said good-bye to &#39;The Daily Show&#39; during his final episode on December 8. The host always seemed keenly aware of the rhetorical position he was&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
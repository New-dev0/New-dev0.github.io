import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The School for Good and Evil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The School for Good and Evil"/>
        <meta name="description" content="Trending News about The School for Good and Evil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The School for Good and Evil</h1>
            <Image width={800} height={500} src="" alt="The School for Good and Evil"/>
            <h3>Recent News</h3>
            <a href='https://www.rogerebert.com/reviews/the-school-for-good-and-evil-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The School for Good and Evil movie review (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQyrBzsOkW9PaF6halLxH6lpJWyhjfDOFMqdfAjJNVA3E4RJjOdKsYYw3DTK9wHuf_0QDj-boNWQ" alt="The School for Good and Evil movie review (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Empty and endless, and too often leaves you wondering what&#39;s going on and why we should bother.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/the-school-for-good-and-evil-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The School for Good and Evil Review - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgbww82Qua9lh3ZncarLEyDaPqv14LPyw9f96bCW4yIpHpmyO0HipdErV9lBGwJTWBwXNDIIj7" alt="The School for Good and Evil Review - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paul Feig waves a very attractive wand at Soman Chainani&#39;s book for his take on the fairy tale world.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/10/19/movies/the-school-for-good-and-evil-review.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The School for Good and Evil&#39; Review: Ever Afters and Never Afters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiCavZnLEd02ybsqa4UoKmuOzGnFNyNoOiUxz7BQ8ivRXUS8TNBOoV3U6lyydYsam08UI45hXS" alt="&#39;The School for Good and Evil&#39; Review: Ever Afters and Never Afters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two best friends have princess dreams and witchy nightmares in this adaptation of Soman Chainani&#39;s book series.</p></div>
            </div>
        </a><a href='https://www.polygon.com/reviews/23412765/school-for-good-evil-review-paul-feig-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>School for Good and Evil review: Netflix does Harry Potter for fairy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQC4boaXNB_gwD81WIhovSv3EfNKueyn_MqPFH8kl8EMHHvvjBndt00SnL8fNRAvLSQrqh6pTXN" alt="School for Good and Evil review: Netflix does Harry Potter for fairy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charlize Theron, Kerry Washington, Michelle Yeoh, Sofia Wylie, and Sophia Anne Caruso lead Paul Feig&#39;s adaptation of Soman Chainani&#39;s boarding-school&nbsp;...</p></div>
            </div>
        </a><a href='https://collider.com/school-for-good-and-evil-review-charlize-theron-kerry-washington-paul-feig/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The School for Good and Evil&#39; Review: A Spellbinding Tale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5LsawZsJzCwsejdh-SzMzLtxErrAvd06S5tV9Hgyp6kmS1hXGQgjVZ9e_EJSKLM7UOhyiYo-t" alt="&#39;The School for Good and Evil&#39; Review: A Spellbinding Tale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The School for Good and Evil is a spellbinding fairy tale driven by strong performances and a heartwarming message.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/film/2022/oct/19/the-school-for-good-and-evil-review-netflix-harry-potter-rip-off'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The School for Good and Evil review – Netflix&#39;s Harry Potter rip-off is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSe4zsmAuKN4sElDmdTcGKPUh4M_JMRHSGWTjbfCcdZDE12GPgv4LEqSCzyoTVDJvwE57xpXN6_" alt="The School for Good and Evil review – Netflix&#39;s Harry Potter rip-off is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An adaptation of a YA favourite about two opposing fairytale schools is overlong, bland and utterly devoid of magic.</p></div>
            </div>
        </a>
        </Template></>;
}
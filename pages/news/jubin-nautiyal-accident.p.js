import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jubin Nautiyal accident</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jubin Nautiyal accident"/>
        <meta name="description" content="Trending News about Jubin Nautiyal accident" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jubin Nautiyal accident</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/12/jubin.jpg" alt="Jubin Nautiyal accident"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/entertainment/music/jubin-nautiyal-shares-health-update-after-accident-god-saved-me-8303558/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jubin Nautiyal shares health update after accident, says &#39;God saved ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-mPHNu7Bkdyw3IvYj_kZSjM7g3Qdzh6Vr8iOaJQefNkPDWBuRCXF2GDre0zYbDxtt9bMtM8Ui" alt="Jubin Nautiyal shares health update after accident, says &#39;God saved ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular singer Jubin Nautiyal met with an accident on Friday morning. He shared a health update for his fans.</p></div>
            </div>
        </a><a href='https://pragativadi.com/jubin-nautiyal-shares-health-update-after-accident/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jubin Nautiyal Shares Health Update After Accident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfkoIgOfDCyha4IJzv25zEMMjB69jC-9ft0qDhCyqCWXhDWgncsaxdzsQZQ0bwNc9c4f4Htz6y" alt="Jubin Nautiyal Shares Health Update After Accident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular singer Jubin Nautiyal shared a health update after he suffered major injuries in an accident that happened at his residence.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/entertainment/news-jubin-nautiyal-accident-news-singer-suffers-multiple-injuries-admitted-to-hospital-in-mumbai-210667'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jubin Nautiyal accident news: Singer suffers multiple injuries ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPf78NxmCGEXnVLdl848nPKcBYQi0FKczYW406tydY0Q4sJ1v8A-Ys-U9scAnqg2RlFAgvd_LH" alt="Jubin Nautiyal accident news: Singer suffers multiple injuries ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jubin Nautiyal accident: The actor met with the accident in the early hours of Thursday. Get more Entertainment News and Business News on Zee Business.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/movies/celebrities/story/god-saved-me-in-that-fatal-accident-jubin-nautiyal-shares-health-update-dia-mirza-wishes-him-speedy-recovery-2304788-2022-12-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;God saved me in that fatal accident&#39;, Jubin Nautiyal shares health ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGfx5qlPt4plWLYKy-h3puyPpVvQVH2yQo3I6zwLT6GtiGA-tmph79T2wjKPgr0l7YKgSJwFlFGg" alt="&#39;God saved me in that fatal accident&#39;, Jubin Nautiyal shares health ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jubin Nautiyal, who recently met with an accident, has been discharged from the hospital. Dia Mirza wished him a &#39;speedy recovery&#39; as he shared the news on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/singer-jubin-nautiyal-suffers-multiple-injuries-in-accident-rushed-to-hospital-355045-2022-12-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Singer Jubin Nautiyal suffers multiple injuries in accident, rushed to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPNRAC2qieaUMbcOdo9ZB2cKR8wXj2zuN7DC08Ylv_oLLhXynwA4ahQ2WjSryUTzRHsNcc-Ylk" alt="Singer Jubin Nautiyal suffers multiple injuries in accident, rushed to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nautiyal reportedly met with an accident in the early hours of Thursday, December 1.</p></div>
            </div>
        </a>
        </Template></>;
}
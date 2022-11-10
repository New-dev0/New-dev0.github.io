import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Latest News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Latest News"/>
        <meta name="description" content="Trending News about Latest News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Latest News</h1>
            <Image width={800} height={500} src="" alt="Latest News"/>
            <h3>Recent News</h3>
            <a href='https://www.cicnews.com/2022/11/canada-invites-4750-candidates-in-latest-express-entry-draw-1131793.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canada invites 4750 candidates in latest Express Entry draw</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzlLxhTrnA4rO5ATMVLDSRHlkHB0MQPJViyWFNC-J4Tyo2sat7NCo5fUw4X7VTmfvUuSLJo1Ly" alt="Canada invites 4750 candidates in latest Express Entry draw" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Immigration, Refugees and Citizenship Canada (IRCC) issued invitations to 4,750 candidates with a minimum Comprehensive Ranking System (CRS) score of 494.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/give-peace-a-chance-who-chief-on-ethiopias-latest-ceasefire-deal-3503547'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Give Peace A Chance!&quot;: WHO Chief On Ethiopia&#39;s Latest Ceasefire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzRlZT45f2AkIZ16BTXqPv9SgjmQHy5HpSWQODRs_z6q2RgfweqOyY3ZnQGOU2x6PI2Krfh6eL" alt="&quot;Give Peace A Chance!&quot;: WHO Chief On Ethiopia&#39;s Latest Ceasefire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tedros Adhanom Ghebreyesus, the World Health Organization&#39;s leader, is in the rare position of heading a UN agency&#39;s response to a humanitarian crisis in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/live/haryana/hr-latest-and-breaking-news-today-in-hindi-live-up-ke-taaja-samachar-9-november-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTm-esWETnRNayMKz-f86ERkdmPZkkNiQgNBvx9z_DJYTv51Oy_2b9OIXxMLsQrWsm4IkzMK8q" alt="HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य और त&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
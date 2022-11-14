import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake today"/>
        <meta name="description" content="Trending News about Earthquake today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake today</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/eathquake.jpeg" alt="Earthquake today"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/cities/delhi/earthquake-tremors-delhi-ncr-8265048/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Nepal, tremors felt in Delhi for second time this week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZ4W6fzONid5HDuTERe4JWffhTFw7WdhFhJ1qUbJbUPwbHv2oz7LozjR827fl1UAnPw3q_hQ3f" alt="Earthquake in Nepal, tremors felt in Delhi for second time this week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the National Earthquake Monitoring and Research Centre, Nepal, the epicentre of the quake was in Bajhang. Earthquake of Magnitude:5.4, Occurred on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/earthquake-tremors-felt-in-delhi-ncr-2296522-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tremors felt in Delhi-NCR as 5.4 magnitude earthquake jolts Nepal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVpls8HV24v6DKVA9WhknQjTasBqRBlPTOBXiV1qfgMS7CijDztqKc2tvbb8gKnCwZSJ3fFfKl" alt="Tremors felt in Delhi-NCR as 5.4 magnitude earthquake jolts Nepal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi-NCR on Saturday evening after an earthquake of magnitude 5.4 on the Richter scale hit Nepal.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/earthquake-tremors-felt-in-delhi-noida-11668263397092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAybq_knAe7nJD8IxzL_MM56IKiwqMQKVNbnTckSDQp-1xJvZYrMc5z8wSxBC4VTowkCGS8zkq" alt="Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi, NCR and some other northern states witnessed earthquake tremors on Saturday. The tremors were felt as an earthquake measuring 5.4 jolted Nepal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/earthquake-tremors-felt-in-delhi-neighbouring-areas-3514800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake Tremors Felt In Delhi, Neighbouring Areas; Second ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQukr9dj7Wai0VnC8mrdGTfV_8tD_-1-w_9SkUoYpYxb7pmLGQdludOsIlOzSf8clR3_zDdFLD-" alt="Earthquake Tremors Felt In Delhi, Neighbouring Areas; Second ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi and adjoining cities around 8 pm today, prompting many to rush out of their houses and offices.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/live-updates/earthquake-in-delhi-ncr-strong-tremors-felt-in-noida-ghaziabad-gurgaon-details-here-2534499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTw9b-vvEwxRmXvDF2XRjLTzvIIsr29D17ecrI49eezJQEAu91GbPr6aKZjbbqcqz286oWrFTRX" alt="Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5.4 Magnitude Earthquake in Delhi-NCR Live Updates: Mild earthquake tremors were in Delhi-NCR today. People in the Delhi&#39;s adjoining cities - Noida,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/breaking-earthquake-tremors-felt-in-delhi-ncr-other-parts-of-north-india-352712-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breaking: Earthquake tremors felt in Delhi, NCR, other parts of North ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQalCkBSKXBuO3Qeij91zVtRT-WlMfHE5LMk-eiqF2dPrzbj3BGpK80uDw0wxI6BGXjSA9UrgSO" alt="Breaking: Earthquake tremors felt in Delhi, NCR, other parts of North ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the National Center for Seismology, the earthquake was of magnitude 5.4 on richter scale. It also showed that source of the earthquake was 10 km&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
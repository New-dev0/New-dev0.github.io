import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ManUtd</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ManUtd"/>
        <meta name="description" content="Trending News about ManUtd" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ManUtd</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/17/140/1150161/MUF_Dream_Day_Emma_McWilliams_72_9046b5d2_3876_42e8_a8b4_00c2a87d4f1e1665417237465_large.jpg" alt="ManUtd"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/man-united-players-attend-dream-day-and-create-special-memories'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United players attend Dream Day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMpXnys5UMXI534U1lnfMChxXCsWOM2Su_bV6AY2_cMcbU5Z4-IKpTFMPnuyCsxsabVjXm5FhY" alt="United players attend Dream Day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Players including Casemiro, David De Gea, Lisandro Martínez and Cristiano Ronaldo made dreams come true at the Carrington Training Ground for fans who suffer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manutd.com/en/news/detail/james-wilson-former-man-utd-striker-posts-social-media-message-on-world-mental-health-day'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wilson sends message on World Mental Health Day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSX7R7_GdxIfrEaUMVT_ED7t0HjlTjlODynwtL4GCUncv_YXxsmN1-96_GmjbxzO2IuceeZJiIP" alt="Wilson sends message on World Mental Health Day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Port Vale forward James Wilson, who began his career at Manchester United, has shared an open and honest post on social media.</p></div>
            </div>
        </a><a href='https://trainingground.guru/articles/analysis-operations-manager-meredith-leaves-man-utd-after-three-years'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Training Ground Guru | Analysis Operations Manager Meredith exits ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9zsx2Ez5U1GGH5rOEwP8iV7q9z90Chz5WSF4NVPordyZ0jVZws6bGY6iihEYC7MqHSoVWAEfb" alt="Training Ground Guru | Analysis Operations Manager Meredith exits ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANALYSIS Operations Manager Andrew Meredith has left Manchester United after three years. The Australian, who previously coached the Germany men&#39;s hockey&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20065661/ronaldo-maguire-children-serious-illnesses-carrington-man-utd/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo and Harry Maguire lead Man Utd aces in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5yvBDY1XYEOoxXBC08SMKSPkMDJFfKbYeT2Y4Osv1NmLHLquB1r315zOyTC_lCYMF99L_87--" alt="Cristiano Ronaldo and Harry Maguire lead Man Utd aces in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MANCHESTER UNITED players made precious memories for excited fans at the club foundation&#39;s &#39;Dream Day&#39;.Cristiano Ronaldo, 37, and England star Harry M.</p></div>
            </div>
        </a>
        </Template></>;
}
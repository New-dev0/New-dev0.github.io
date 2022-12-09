import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man United"/>
        <meta name="description" content="Trending News about Man United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man United</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/15/79/1003373/Pennyhill_Training_23_07_2021_191670518729699_large.jpg" alt="Man United"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/man-utd-doctor-steve-mcnally-leaves-club-after-16-years'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dr Steve McNally steps down after 16 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlAlMnZZ2LMrIG1EnIWSZso_TrSgAl234gNzkGaqbBa1M5l9zyPFeyS1wCSyh0EJfJe4kq6GGm" alt="Dr Steve McNally steps down after 16 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>McNally will leave his position as head of football medicine &amp; science at the end of January to become performance support director for PGMOL. He joined United&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11516685/Man-United-doctor-Steve-McNally-leave-Old-Trafford-SIXTEEN-years-club.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man United doctor Steve McNally will leave Old Trafford after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRet_7o1CFtSlu06nDDI23tLMp5CYFaDhOQOLFC5mHx2-BCumavw5u93EyDi9ij4zTfSdm2f-Cq" alt="Man United doctor Steve McNally will leave Old Trafford after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHRIS WHEELER: Manchester United&#39;s club doctor Steve McNally is to leave the club after 16 years, the club have announced. McNally will step down at the end&nbsp;...</p></div>
            </div>
        </a><a href='https://worldsoccertalk.com/news/erik-ten-hag-upset-at-man-united-loss-to-laliga-bottom-dweller-20221208-WST-411698.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erik ten Hag upset at Man United loss to LaLiga bottom-dweller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMl3s9nzoM0-5HqKmpjJ0RZZVTc48QJ-nHnlFO2yxdfQ3DB5XsnyPi3Gg7ZKJbI1yuYiZdse2W" alt="Erik ten Hag upset at Man United loss to LaLiga bottom-dweller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United boss Erik ten Hag fumes at his team following a 4-2 friendly loss to 19th-placed Cadiz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63912042'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd will not pay dividend in 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKTp5H70cXOe74hE3FJ6j8D2vbsXbovqOQc-fgqARcebmH_ACw1FVQdBqO_afGXwa6WjS21C_W" alt="Man Utd will not pay dividend in 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the last financial year, £33.6m was paid in dividends - mainly to the Glazer family. United are the only Premier League club to pay a dividend, which has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/sampilger/2022/12/08/kobbie-mainoo-takes-his-chance-at-manchester-united/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kobbie Mainoo Takes His Chance At Manchester United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJ-ld_5-xKI1_W6YHjIltAi2FVvLbmXlOayBw6hByMho1KLB5d6ZFRaLs8MeRtbrpOOsREbMRz" alt="Kobbie Mainoo Takes His Chance At Manchester United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of Manchester United&#39;s friendly against Cadiz at the Neuvo Mirandilla on Wednesday evening the United manager Erik ten Hag had said the game&nbsp;...</p></div>
            </div>
        </a><a href='https://punditarena.com/football/james-fenton/erik-ten-hag-unhappy-with-how-man-united-started-friendly-defeat/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erik ten Hag unhappy with how Man United started friendly defeat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVqeqaAkUirZwY2LkKqlfAq4q6Wz3FYZErB6u2jPYN5pgTyQQg-B60cZZq0_9OGN_s70a-Vfeh" alt="Erik ten Hag unhappy with how Man United started friendly defeat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United manager Erik ten Hag was unhappy with how his players started in a 4-2 defeat to Cadiz on Wednesday evening.</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/manchester-united/franck-kessie-man-utd-seething-step-down-claim-arsenal-suitable'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd left seething as transfer target warned Old Trafford move ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQe6eaOGwnqJLA8jGn20WlqwjIY2txx4NLFsHkNH7LpN4LCLbtNct5rYyStjJHyi8MMgmR5pGMS" alt="Man Utd left seething as transfer target warned Old Trafford move ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag and Manchester United will likely be angry after a midfield target was urged to snub their advances and instead join a Premier League rival&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manutd.com/en/news/detail/talking-points-from-cadiz-v-man-utd-friendly-on-7-december'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we noticed from our Cadiz friendly</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo1MSrZyEOjjLoLAFhsqbCAjgfWAqFBZTxu9nm7u9jxMm7p2aGPL_vkqpiE0uE62uXkU_KKj1w" alt="What we noticed from our Cadiz friendly" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag&#39;s Manchester United team returned to action for the first time in 24 days, with a friendly against La Liga side Cadiz CF in Spain.</p></div>
            </div>
        </a><a href='https://www.planetsport.com/soccer/news/cody-gakpo-admits-man-united-dream-amid-red-devils-interest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands star Cody Gakpo admits Man United dream amid Red ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzE9A0-NBiFBDsCfSRyYpjdo6yhQief2_-i-DNxhlCJ5hP3ef5d3KUrYDV0XEUmmQwsX11DOtY" alt="Netherlands star Cody Gakpo admits Man United dream amid Red ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netherlands forward Cody Gakpo has hinted that he would jump at the chance to join Manchester United, but admits there has been no approach from the Red&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/manchester-united/29833-cadiz-man-united-red-devils-suffer-42-humiliating-defeat-world-cup-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz vs Man United: Red Devils Suffer 4:2 Humiliating Defeat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5ybmZLx_ZUKxYCZyJ9i6xP5bos0c-_EU4imnTe7dun4ECC18PHgUwvWDjfWG8-6OvRPpCRHhy" alt="Cadiz vs Man United: Red Devils Suffer 4:2 Humiliating Defeat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News - Cadiz and Manchester United&#39;s friendly clash ended in a 4-2 defeat for the Red Devils. The match is part of United&#39;s preparations for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
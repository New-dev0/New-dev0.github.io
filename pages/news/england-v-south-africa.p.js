import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England v South Africa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England v South Africa"/>
        <meta name="description" content="Trending News about England v South Africa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England v South Africa</h1>
            <Image width={800} height={500} src="https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2022/11/26212834/Damian-Willemse-and-Jacques-Nienaber-for-South-Africa-PA.jpg" alt="England v South Africa"/>
            <h3>Recent News</h3>
            <a href='https://www.planetrugby.com/news/autumn-nations-series-five-takeaways-from-england-v-south-africa-as-classic-springboks-performance-shines-light-on-english-problems'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autumn Nations Series: Five takeaways from England v South Africa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRLYpbL3QJnPOwDamVNXUSkGOb6TnegNkFumTEvO1TuEccdL0b5a7tBmMjd8eGHGRGEMJ3vFpt" alt="Autumn Nations Series: Five takeaways from England v South Africa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following a 27-13 victory for South Africa over England in their Autumn Nations Series fixture, here&#39;s our five takeaways from the match at Twickenham.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/26/england-v-south-africa-ratings-players-poor-scored-310/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v South Africa ratings: Which players were so poor they ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5NReiTJKoLQMfXPBMtmHk4tDEeSvFYN4cU52vRPPVK_H9rMFDO4xV7vT3ESaTiNzkm1vuU942" alt="England v South Africa ratings: Which players were so poor they ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England conclude a difficult 2022 when they won only five of their 12 Tests.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/england-player-ratings-vs-south-africa-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England player ratings vs South Africa | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkC8mU2fz1rC0obyzaV1jPSkITEirtH9fzTGTFgqUAXcXOtHInwS1zka6SEQa47GSLbu9N_Ami" alt="England player ratings vs South Africa | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England player ratings live from Twickenham: A deja vu scenario, but with quite a damaging outcome for England on this occasion.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/live/2022/nov/26/england-v-south-africa-autumn-nations-series-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England 13-27 South Africa: Autumn Nations Series – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZ7tR1WMgJXvGi8LkHedq68giacE03_rpVHyfFMoT6pq3pJ6gmjaD2OQvqp2iTdzqWiw8mKvBg" alt="England 13-27 South Africa: Autumn Nations Series – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England were not good enough against the Springboks in the 2019 World Cup final and they were similarly outplayed here.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/rugby-union/news/england-vs-south-africa-live-stream-tv-channel-lineups-2022/thnukdgyg6deqnvfddefpods'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs. South Africa result, highlights and analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnjOqGwdiqciztAEbPqFqY14adeMGDZhn5QxSB1t4Z86gWa76FIbClFVHHPPz_Sn52WLvktevL" alt="England vs. South Africa result, highlights and analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa produced a gold-standard performance at Twickenham to dispatch England in the final international rugby match of 2022, with the Springboks a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
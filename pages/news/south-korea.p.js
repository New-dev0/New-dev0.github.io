import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>South Korea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,South Korea"/>
        <meta name="description" content="Trending News about South Korea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>South Korea</h1>
            <Image width={800} height={500} src="https://s.abcnews.com/images/International/WireAP_8589eda292434e788b3cc2e5e36709de_16x9_992.jpg" alt="South Korea"/>
            <h3>Recent News</h3>
            <a href='https://abcnews.go.com/Business/wireStory/south-korea-orders-striking-cement-truckers-back-work-94128082'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea orders striking cement truckers back to work</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx88hnD4mCWeja3gjJdHmcV6lt8cREH9-dT09Dxvi5BNfFsQVFDJM4Wv9XCt6Ocknf2Fe3VHQo" alt="South Korea orders striking cement truckers back to work" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Korea&#39;s government has ordered some of the thousands of truck drivers who have been on strike to return to work, insisting that their nationwide&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/economy/2022/11/29/south-korea-weighs-ordering-striking-truckers-back-to-work'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea orders striking truckers back to work</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVYMJY7ZFdhQRHjdKlDuaUsPSn65gkW_FgyzhpQnPiWrbR4Udh--HSGVE8N3-cFOeDPGhCFNZb" alt="South Korea orders striking truckers back to work" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Korea&#39;s government has taken the unprecedented step of invoking tough strike-busting laws to end a six-day stoppage by truck drivers it says is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/california/story/2022-11-29/randys-donuts-in-seoul-south-korea'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Randy&#39;s Donuts in Seoul adds L.A. flavor to South Korea</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfbzJ3I1-4x72uDwLhCr2dFrQVxuWSIWVTmkYVCmJmId6jAypJIeSB3zd4cC4TEhSDbGFG85kt" alt="Randy&#39;s Donuts in Seoul adds L.A. flavor to South Korea" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A few years ago on a trip to Tokyo I encountered Downtown Los Angeles&#39; Pie Hole in the basement of a train station on my way to try Afuri Ramen, a yuzu ramen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/asia-pacific/south-korea-weighs-ordering-striking-truckers-back-work-2022-11-29/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea orders striking truckers in cement industry back to jobs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAMNNy6zu5nKEYRFe_q3wStCF-3SwB98-rux8gX93Qw2FQ4wHfk_n_pGhLl9ddVUDSElCZyAE8" alt="South Korea orders striking truckers in cement industry back to jobs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>First start-work order ever issued &middot; Union calls order &#39;equivalent to martial law&#39; &middot; President says &#39;will never compromise with illegality&#39;.</p></div>
            </div>
        </a><a href='https://www.spglobal.com/commodityinsights/en/market-insights/latest-news/lng/112922-south-koreas-relatively-mild-winter-forecast-spurs-lng-supply-overhang-fears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea&#39;s relatively mild winter forecast spurs LNG supply ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="South Korea&#39;s relatively mild winter forecast spurs LNG supply ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Korea is on track for a mild winter weather in January and February, the meteorological office said last week, raising concerns over LNG supply&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laprensalatina.com/south-korea-orders-cement-truckers-to-end-strike/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea orders cement truckers to end strike - La Prensa Latina ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRlTiVulg0QYgP2IttxeytTWA0Z1yPgj9CSEgfu9xWdsZxGBT29LnErIb3x0WmpFcrP8f-Uo1D" alt="South Korea orders cement truckers to end strike - La Prensa Latina ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seoul, Nov 29 (EFE).- South Korea on Tuesday ordered truckers of the cement industry to return to work after an almost week-long strike.</p></div>
            </div>
        </a>
        </Template></>;
}
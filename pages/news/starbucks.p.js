import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Starbucks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Starbucks"/>
        <meta name="description" content="Trending News about Starbucks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Starbucks</h1>
            <Image width={800} height={500} src="https://npr.brightspotcdn.com/dims4/default/4d754e3/2147483647/strip/true/crop/1077x565+0+121/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F11%2F17%2Fsbwu-red-cup-edf02691759a3eabe8a09b54d312dd04a3d73a79.png" alt="Starbucks"/>
            <h3>Recent News</h3>
            <a href='https://www.kosu.org/news/news/2022-11-17/on-red-cup-day-thousands-of-starbucks-workers-go-on-strike'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On Red Cup Day, thousands of Starbucks workers go on strike</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuCsf-shNr2g421Tx68Rs0khbQegYeV-tNEeWK5QE-7sgkaqzulc6c8pUYmieIADpNeZDVWOyA" alt="On Red Cup Day, thousands of Starbucks workers go on strike" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hardcore Starbucks fans eagerly await the day the coffee company gives out limited-edition holiday cups. The union organizing Starbucks workers hope those&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/17/starbucks-union-to-strike-at-more-than-100-locations-on-red-cup-day-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Starbucks union to strike at more than 100 locations on Red Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdphX3V3-Yjzl1ozc1brW3-yLbfLevUOOfh-SJzT3WAe9uWbla45BmTQ7pnJus4sTNSIotW_eo" alt="Starbucks union to strike at more than 100 locations on Red Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At the 113 striking locations, the union will be distributing its own version of the reusable red cup.</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/economy/starbucks-workers-strike-at-more-than-100-stores-in-largest-labor-action-since-union-campaign'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Starbucks workers strike at more than 100 stores in largest labor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9I6j8Ts4FiVnzOH63NQMBFjjV320POAMcle6a_Ql6imi25yZENkBo3BxfVi-_1tmcymO5V_QW" alt="Starbucks workers strike at more than 100 stores in largest labor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Starbucks workers at more than 100 U.S. stores are on strike Thursday in their largest labor action since a campaign to unionize the company&#39;s stores began&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/business/economy/starbucks-union-strike.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Starbucks Workers Strike at Dozens of Stores Nationally</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvIEzhl9z1tKt0w0OxtubSpkI-kLnTNAlbiYyGtZtMKFPikr6X9KZRZHM--3apIpgTQzFM6PpU" alt="Starbucks Workers Strike at Dozens of Stores Nationally" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Workers said they were protesting the company&#39;s refusal to bargain in good faith and other anti-union activity.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/business/2022/11/17/starbucks-strike-union/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Starbucks workers strike on &#39;Red Cup Day&#39; over stalled labor talks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9atB2yTPYKU7nCxF6OOeCahhFTTK4dG9sj37_WAPgWh_NKuneAO8cAGxcUYSZH2LP7TBqjuGb" alt="Starbucks workers strike on &#39;Red Cup Day&#39; over stalled labor talks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Employees from more than 100 Starbucks stores walked off the job Thursday, hoping to shutter shops for the day in protest of the company&#39;s approach to union&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/17/business/starbucks-strike/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>About 2000 Starbucks workers stage one-day strike at more than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6wSa_gskYJneGUzuBn1ohrzJGAB0WtgDdp_darIIHfmUIFNn_y1WPIoUEoKpjpkR2yrkMawmr" alt="About 2000 Starbucks workers stage one-day strike at more than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 2000 employees at 112 Starbucks locations are set to go on a one-day strike Thursday, according to the union which has been organizing stores for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
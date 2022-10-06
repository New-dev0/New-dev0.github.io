import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Barcelona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Barcelona"/>
        <meta name="description" content="Trending News about Barcelona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Barcelona</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1004%2Fr1071074_1296x729_16%2D9.jpg" alt="Barcelona"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/barcelona-espbarcelona/story/4761509/barcelona-coach-xavi-outraged-over-refereeing-injustice-in-defeat-to-inter-milan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona coach Xavi outraged over refereeing &#39;injustice&#39; in defeat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRLNEf1iibvBq18_V0oIvKjhP_hXvIpCLZHxZGnuG1tSsG4Hv3MWDzn5wWyIAwQwgja_H5fTi5" alt="Barcelona coach Xavi outraged over refereeing &#39;injustice&#39; in defeat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona coach Xavi Hernandez said he was outraged at what he believed were refereeing injustices in his side&#39;s Champions League defeat to Inter.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/its-an-injustice-xavi-furious-at-referee-after-barcelonas-champions-league-defeat-against-inter-milan-522646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Its an injustice: Xavi furious at referee after Barcelonas Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpJ1k2PdPob7aMNLwZtj-9s43elM30dlU39XzbV2GCk-r_TUs6rP4hYq2lulxueKszacJ4YthI" alt="Its an injustice: Xavi furious at referee after Barcelonas Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona head coach Xavi Hernandez was left fuming after controversial refereeing decisions in his side&#39;s 1-0 loss against Inter Milan in the Champions&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/football/champions-league-calhanoglu-scores-as-inter-milan-sink-barcelona/article65970745.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League | Calhanoglu scores as Inter Milan sink Barcelona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsUWg0-jt9aF3OaG2EoPNozs6QXAAPVuNY8sp6nBNSugKDcGFdNPTRUVP1CFkzFf9RkXg9O0LH" alt="Champions League | Calhanoglu scores as Inter Milan sink Barcelona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The home win lifted Inter to second place in Group C on six points, three behind leaders Bayern Munich and three in front of Barcelona.</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/angry-barcelona-fans-var-conspiracy-claim-champions-league-handball-vs-inter/bltf6d02bb25a550192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angry Barcelona fans in VAR conspiracy claim - so why didn&#39;t they ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTp9-CmoWbJakh2wcLyc-BqfTGTjZ0IGWCkKCvNw4wvkNQUBa-Zo7mp4DSC3OSnGKkPYN_FhHON" alt="Angry Barcelona fans in VAR conspiracy claim - so why didn&#39;t they ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona thought they&#39;d won a penalty after seeing the ball strike the arm of Inter&#39;s Denzel Dumfries, so why wasn&#39;t it given by VAR?</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/group-stage-exit-barcelona-winners-losers-ratings-inter-champions-league/blt9c7ac23c72892b1e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Surely not another group-stage exit? Barcelona winners, losers and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGC-qwANTzWSbiA22I6yOFEnafBVameEpAn5e1wpyMQOFNfpYiwDrHGws4xyL6OQzWzWpXSR6T" alt="Surely not another group-stage exit? Barcelona winners, losers and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona went down to a 1-0 defeat against Inter to leave them with just three points from their opening three Champions League matches and staring a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/barcelona/2022/10/05/633dc0df268e3ee73a8b45e9.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona contain their anger: No formal complaint against UEFA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF5WxQjDiLY_vjiXzFBbKBwkHJwgTgzqImOCUfu7M600nsm5CsLAtGkDsC_koNn7ka04HIpHJi" alt="Barcelona contain their anger: No formal complaint against UEFA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The robbery suffered by Barcelona at the Stadio Giuseppe Meazza against Inter was a big one. The referee did not want to see a clear handball by Italian&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Melinda Gates</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Melinda Gates"/>
        <meta name="description" content="Trending News about Melinda Gates" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Melinda Gates</h1>
            <Image width={800} height={500} src="http://cdn.wionews.com/sites/default/files/2022/12/08/316713-untitled-design-2022-12-08t161429764.png" alt="Melinda Gates"/>
            <h3>Recent News</h3>
            <a href='https://www.wionews.com/india-news/melinda-gates-showers-praise-on-up-governments-coronavirus-vaccination-program-541282'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melinda Gates showers praise on UP governments Coronavirus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSavTNmEVn1LyZ2HE9ARkqccxKC4z_zrXBKOSm08uuM6n1KKqfoLyhhPbe1OTOl1aflvNWjEiO8" alt="Melinda Gates showers praise on UP governments Coronavirus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Melinda Gates, the co-founder of the Bill &amp; Melinda Gates Foundation, met with Uttar Pradesh Chief Minister Yogi Adityanath on Wednesday in Lucknow to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/melinda-gates-meets-cm-adityanath-hails-ups-development-as-model-for-the-world/article66238547.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melinda Gates meets CM Adityanath, hails UP&#39;s development as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCYsoHDfaqf-lYtkJwM_HUU2BlIiJwJGnVhqFcCM9r49PAV177SjgIQy-i02DoWHcIfDqPpbAh" alt="Melinda Gates meets CM Adityanath, hails UP&#39;s development as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bill &amp; Melinda Gates Foundation co-founder Melinda Gates on Wednesday said Uttar Pradesh could be a model not just for India but the world.</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/up-is-a-model-for-the-whole-world-melinda-gates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UP is a model for the whole world: Melinda Gates | News Room ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFni5RyOJaSolh_LOWZnV7kSWDVdQJ4QV1foR5Cc_LdbohNkSAWSbnjb-MIoQpo2-uoRF8Jpod" alt="UP is a model for the whole world: Melinda Gates | News Room ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Melinda Gates met Uttar Pradesh Chief Minister Yogi Adityanath at the latter&#39;s official residence on Wednesday and discussed enhancing technical cooperation in&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/lucknow/melinda-gates-meets-yogi-adityanath-discusses-collaboration-in-health-and-nutrition-8312128/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melinda Gates meets Yogi Adityanath, discusses collaboration in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTh2zU7Agxj6ZgRbv1lc63EB0BDcYvkH_LAjRir1GLlHKO7ebA8XvIIdxKHCIprAg_cbOrpRfHT" alt="Melinda Gates meets Yogi Adityanath, discusses collaboration in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to Melinda, the efforts of the UP government in the areas of health security, financial inclusion, nutrition, education, women empowerment etc.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/video-melinda-gates-visits-garhi-village-in-delhi-uses-paytm-to-pay-at-local-store-3589507'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video: Melinda Gates Visits Garhi Village In Delhi, Uses Paytm To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSP9UWD2WupTWCRK1ZURDJI4krwk4Y4fnF3f7LGEj40PndLypvYNm_HlWS1_qKSZeS8U1lyZZH1" alt="Video: Melinda Gates Visits Garhi Village In Delhi, Uses Paytm To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Philanthropist and co-chair of Gates Foundation Melinda Gates on Wednesday visited Garhi village in New Delhi and interacted with elderly women and other&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
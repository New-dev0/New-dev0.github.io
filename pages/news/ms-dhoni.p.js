import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MS Dhoni</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MS Dhoni"/>
        <meta name="description" content="Trending News about MS Dhoni" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MS Dhoni</h1>
            <Image width={800} height={500} src="https://images1.livehindustan.com/uploadimage/library/2022/05/05/16_9/16_9_1/ms_dhoni_and_ravindra_jadeja_1651745543.jpg" alt="MS Dhoni"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/cricket/story-pragyan-ojha-says-till-the-time-ms-dhoni-is-playing-there-can-not-be-a-different-captain-7360152.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भारत के पूर्व स्पिनर का दावा- CSK में जब तक एमएस धोनी हैं, तब तक कोई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQp9cnMTjKLPJUPiEmit_skxtvIQMznrr8JjTE_ccuAYjK0mAjoyCQ78GeOXgKDQ1E1GInLVr-d" alt="भारत के पूर्व स्पिनर का दावा- CSK में जब तक एमएस धोनी हैं, तब तक कोई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत के पूर्व स्पिनर प्रज्ञान ओझा ने दावा किया है कि चेन्नई सुपर किंग्स यानी CSK के लिए&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/headlines-ms-dhoni-will-lead-csk-believe-former-indian-bowler-pragyan-ojha-23207304.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni: पूर्व भारतीय क्रिकेटर का दावा, धौनी हैं तो वहीं करेंगे CSK को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsTk2UW1tgxwlZ-ZnbK4E7QTf65v_BQlO4Z8mV4SzFqEooRDCbFhO-JQursbV7ByN6ePCVNPrw" alt="MS Dhoni: पूर्व भारतीय क्रिकेटर का दावा, धौनी हैं तो वहीं करेंगे CSK को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni एमएस धौनी ही आइपीएल 2023 में भी सीएसके की कमान संभालेंगे। इस बात की पुष्टि खुद&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/khel/ms-dhoni-retirement-mahi-will-retire-after-ipl-2023-bcci-may-make-director-of-cricket-reports/2491554/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni Retirement: एमएस धोनी IPL 2023 के बाद संन्यास लेंगे, BCCI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRa2a2q_ZxmiHU5JGaIWBoXSJb0CKMtGF1E_eBCOZz3xNMdnxVVycWRRbncZsonbwizxeKoPrRK" alt="MS Dhoni Retirement: एमएस धोनी IPL 2023 के बाद संन्यास लेंगे, BCCI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni Director Of Cricket: मीडिया रिपोर्ट्स के मुताबिक, बीसीसीआई (BCCI) महेंद्र सिंह धोनी (Mahendra Singh&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ipl-2023-ms-dhoni-set-to-lead-chennai-super-kings-in-next-season-2260105'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: अगले सीजन में चेन्नई सुपर किंग्स की कप्तानी करेंगे एमएस धोनी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8X8dU2LRy3BthvBDz30mG7Gsj6oH3N3PDIZZErSqMcq8yIV0FS8EmISShAxjrg_QpXzcX_HHn" alt="IPL 2023: अगले सीजन में चेन्नई सुपर किंग्स की कप्तानी करेंगे एमएस धोनी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni: चेपक में चेन्नई का मैच देखने के लिए तीन साल से इंतजार कर रहे फैंस को एमएस धोनी एक&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/ms-dhoni-to-join-team-india-ahead-of-icc-t20-world-cup-2024-reports-2535875.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI set to take BIG decision, MS Dhoni to make comeback in Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0y6F7Vp1RQxQkLYD_joE2bb6g5z7Q-x4j_DzbjtmR977_jPQv5HXqlDCohONVm2-i5LHmGU_K" alt="BCCI set to take BIG decision, MS Dhoni to make comeback in Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former captain, who was incidentally the last Indian skipper to win an ICC title, had worked as a mentor for India at the last year&#39;s T20 World Cup in&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/team-india-ms-dhoni-set-for-big-role-in-indian-cricket-director-of-cricket-after-loss-in-t20-world-cup/1442286'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni: धोनी को टीम इंडिया में कोच द्रविड़ से भी बड़ा पद देगा BCCI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0TlfXyhqYCavGlOTVHYBGRDtKJ4rEhiCz5Bqi5PxOgAFfrO0_suonnTVoMcb9RjJu8ePDsEVr" alt="MS Dhoni: धोनी को टीम इंडिया में कोच द्रविड़ से भी बड़ा पद देगा BCCI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team India: टी20 वर्ल्ड कप 2022 के सेमीफाइनल में इंग्लैंड के हाथों 10 विकेट से हार के बाद भारत&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/cricket/ms-dhoni-set-to-be-given-big-role-by-bcci-in-india-t20i-set-up-after-his-retirement-post-ipl-2023-report-article-95529504'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni set to be given big role by BCCI in India T20I set-up after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZaRw971ZAbW3WtzQut-6hgyjgLXlfltNnrWZwkY2pXYrzI4BmPOaQOhSvpsBIjOjylTHK2Qgd" alt="MS Dhoni set to be given big role by BCCI in India T20I set-up after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to a repot by The Telegraph, the Board of Control for Cricket in India have decided to offer the former India captain Mahendra Singh Dhoni a spot&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/everything-is-fine-ravindra-jadeja-shuns-rift-rumours-with-ms-dhoni-led-csk-after-being-retained-534500'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everything is fine: Ravindra Jadeja shuns rift rumours with MS Dhoni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT86FLetBbUupguWbtcDTXgDnGSPs6kIGSSaeCvHM5ndUTm5KPiuPfI_y4xtQ45S4e_m_0kDM3h" alt="Everything is fine: Ravindra Jadeja shuns rift rumours with MS Dhoni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Tuesday (November 15), all ten IPL teams shared their list of retained as well as released players before the IPL 2023 mini-auction.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/2024-world-cup-bcci-may-utilise-ms-dhonis-exprience/articleshow/95532245.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2024 World Cup: BCCI may utilise MS Dhoni&#39;s exprience</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAF7yhd3c7CxuYcI_aoPK0fWVU_VLWIQrxtf-tP5cr4PCB-dWiRFZ5lqFAn1aOIbaQ0EljoyBz" alt="2024 World Cup: BCCI may utilise MS Dhoni&#39;s exprience" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former skipper is arguably one of the finest captains the sport has ever seen. Under his leadership, Team India won the T20 World Cup in 2007,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/sports/cricket/ipl-2023-ravindra-jadeja-shared-a-picture-with-ms-dhoni-after-being-retained-in-csk-jst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: &#39;सब कुछ ठीक है&#39;, CSK ने नहीं छोड़ा रविंद्र जडेजा का साथ, MS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyRhUwlQMbTxi7AOk1KdqBHVphE7cPRmvtcplZ7-bchpTgvlH6ONH6rg_4YiC2bSfqE-TNOlZd" alt="IPL 2023: &#39;सब कुछ ठीक है&#39;, CSK ने नहीं छोड़ा रविंद्र जडेजा का साथ, MS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023: चेन्नई सुपर किंग्स (CSK) ने रविंद्र जडेजा को रिटेन कर लिया है. जिसके बाद जडेजा ने&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
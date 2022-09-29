import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cricket/is-cricket-taking-root-in-the-northeast-101664367629311.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is cricket taking root in the NorthEast?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDhKLHfy51YnpCO4xxnCebavrzjVDgSOSpwWIPAvbCmy2apgcjCs0VPgpr4Qgq-qIVmRiqmHUR" alt="Is cricket taking root in the NorthEast?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For Hokaito Zhimomi and the Nagaland players, the pre-quarterfinal of the 2021/22 Ranji Trophy in March quickly turned from a promising opportunity to an&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailypioneer.com/2022/columnists/durand-faultlines-on-cricket-pitch.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Durand faultlines on cricket pitch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSia8prA55JmCNCTxisUvn1HJ6VmVW_M_4Bo5RcmCEq9iwrUjj0Qyv6qYwolMgmQSfFCPtEEaZ6" alt="Durand faultlines on cricket pitch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When the former Pakistani speedster and motor-mouth Shoaib Akhtar railed against the ostensible behaviour of Afghan players and fans in the recent Asia Cup&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/Sports/Cricket/irani-cup-cricket-hanuma-vihari-captains-rest-of-india-803474'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>இரானி கோப்பை கிரிக்கெட்: ரெஸ்ட் ஆப் இந்தியா ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLFGZ0jXJDjocVQQd1h5h-ovgatzDs0ucTWwIaQPZFLcE8MYJe36pJzuLUItNF9_h-plXLF1T5" alt="இரானி கோப்பை கிரிக்கெட்: ரெஸ்ட் ஆப் இந்தியா ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இரானி கோப்பை கிரிக்கெட் போட்டியில் ரெஸ்ட் ஆப் இந்தியா அணிக்கு ஹனுமா விஹாரி கேப்டனாக&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cricket.com.au/news/str8bat-cricket-technology-batting-360-view-real-time-analysis-players-coaches/2022-09-29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Radical technology to unlock data insights for batters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQO8K6peIioVQ0KH7SSbOgfZeVKT8il_eyHoYgEZa9reQC0bmDtJmV-cO2Cecf6y5zYki18vSpj" alt="Radical technology to unlock data insights for batters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket Australia has announced a partnership with str8bat, which gives players and coaches from juniors to the elite level a 360-degree view of every shot&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/sep/28/county-cricket-2022-awards-the-spins-final-word-on-the-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>County cricket 2022 awards: the Spin&#39;s final word on the season</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbe1V2v_AdQ3pXens_Uw8R-YZtLfY36rgSD3lNBG_9f0noAefICHP00A_yRCvlni36jdjHIjTQ" alt="County cricket 2022 awards: the Spin&#39;s final word on the season" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Spin dishes out the gongs to the best, worst, and most memorable events of the 2022 Championship season.</p></div>
            </div>
        </a><a href='https://www.hindutamil.in/news/sports/875787-sai-kishore-named-in-irani-cup-cricket-rest-of-india-squad.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>இரானி கோப்பை கிரிக்கெட் - ரெஸ்ட் ஆஃப் இந்தியா ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8U5QIeKAgbX2WIjDpsMK5UJhZji-bfrH9LMmAyPuTr-2zPWDXoD5plF2tRO7QLCZQaNSG9z_J" alt="இரானி கோப்பை கிரிக்கெட் - ரெஸ்ட் ஆஃப் இந்தியா ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>அணி விவரம்: ஹனுமா விஹாரி (கேப்டன்), அபிமன்யு ஈஸ்வரன், பிரியங்க் பன்சால், மயங்க் அகர்வால்&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
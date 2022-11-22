import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UAE</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UAE"/>
        <meta name="description" content="Trending News about UAE" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UAE</h1>
            <Image width={800} height={500} src="https://www.moroccoworldnews.com/wp-content/uploads/2022/11/morocco-uae-to-launch-1st-phases-of-security-cooperation-program-800x533.jpg" alt="UAE"/>
            <h3>Recent News</h3>
            <a href='https://www.imf.org/en/News/Articles/2022/11/21/pr22387-uae-imf-staff-completes-2022-article-iv-mission-to-united-arab-emirates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IMF Staff Completes 2022 Article IV Mission to United Arab Emirates</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="IMF Staff Completes 2022 Article IV Mission to United Arab Emirates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Near-term economic growth is strong, underpinned by a rebound in domestic activity, while elevated oil prices support high surpluses in the fiscal and external&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moroccoworldnews.com/2022/11/352495/morocco-uae-to-launch-1st-phases-of-security-cooperation-program'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco, UAE to Launch 1st Phases of Security Cooperation Program</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSp7HSukUvG081MqdWwuO4MULjxSRwflGxXYx_vmLO2cAt5KtOUVpPmfvw9kLMdZWQaOHoY8c6d" alt="Morocco, UAE to Launch 1st Phases of Security Cooperation Program" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morocco&#39;s General Directorates of National Security and Territorial Surveillance (DGSN-DGST) and the General Command of Abu Dhabi Police in the UAE will&nbsp;...</p></div>
            </div>
        </a><a href='https://www.defense.gov/News/Releases/Release/Article/3224987/readout-of-us-united-arab-emirates-joint-military-dialogue/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Readout of U.S.-United Arab Emirates Joint Military Dialogue</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Readout of U.S.-United Arab Emirates Joint Military Dialogue" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pentagon Spokesman Lt. Col. David Herndon provided the following readout: Under Secretary of Defense for Policy Dr. Colin Kahl led a senior-level delegation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thenationalnews.com/business/technology/2022/11/21/uaes-future-economy-is-well-positioned-to-benefit-from-ai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE&#39;s future economy is well positioned to benefit from AI</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbwbnOCgi0Espi9QKU_MnOmg66PqJotREzDZSypZkPJUOvGR4_MYrWkmxPtkEht-3zXsEqQ0o7" alt="UAE&#39;s future economy is well positioned to benefit from AI" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The momentum of AI development further complicates matters because current privacy and security regulations often do not account for its capabilities.</p></div>
            </div>
        </a><a href='https://northafricapost.com/62835-morocco-training-senior-uae-law-enforcement-officers.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco training senior UAE law enforcement officers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMV_GBGlGXDJgbvpXVpJFDS3pJ75EYOmQ6wYoajj1WI9NNn2qPJjAQohp3z8QLBZYiB5Eech7q" alt="Morocco training senior UAE law enforcement officers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A group of senior Emirati police officers started this Monday a two-month training at the Royal Moroccan Police Institute within the frame of the exchange&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arabnews.com/node/2203706/saudi-arabia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE defense delegation visits IMCTC headquarters in Riyadh</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQn-0h26gIHHDyqC0u9hQVXL77V44kk9dkgiNLktsRums7H6sGsjrbh7nKqFRBfy9W9neSESorX" alt="UAE defense delegation visits IMCTC headquarters in Riyadh" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RIYADH: The Islamic Military Counter Terrorism Coalition on Monday received a delegation of cadets and members of the training committee of the 10th&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
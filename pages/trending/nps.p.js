import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NPS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NPS"/>
        <meta name="description" content="Trending News about NPS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NPS</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/31102022/31_10_2022-nps_rule_change_23173756.jpg" alt="NPS"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/business/biz-nps-rule-change-retirement-fund-investment-credit-card-payment-nomination-annuity-23173756.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NPS Rule Change: एनपीएस में करते हैं निवेश तो जान लें ये नए नियम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcmQetnnhyovpT_Lc5CRsFZy4hDMw-vf1qFsOvw0t1zF2aT0OVx0d3ZWkxA73QwvE1RSdtrPu9" alt="NPS Rule Change: एनपीएस में करते हैं निवेश तो जान लें ये नए नियम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NPS Rule Change पीएफआरडीए और आईआरडीए की ओर से पिछले कुछ समय में एनपीएस के कई नियमों को बदला&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.goodreturns.in/personal-finance/national-pension-scheme-subscribers-can-now-invest-up-to-75-in-equity-032146.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NPS திட்டத்தில் முதலீடு செய்ய போறீங்களா ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRN5TGeMo6eXEjAdf-qjzQ-F9TIx4zAeDa0fUjTMOxs3EuPW7j4_qiXuw2qTeZOZ8v-NRUw3OFV" alt="NPS திட்டத்தில் முதலீடு செய்ய போறீங்களா ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இந்த திட்டத்தினை ஓய்வூதிய நிதி ஒழுங்குமுறை மற்றும் மேம்பாட்டு ஆணையத்தால் (PFRDA)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
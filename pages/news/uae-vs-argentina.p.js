import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UAE vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UAE vs Argentina"/>
        <meta name="description" content="Trending News about UAE vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UAE vs Argentina</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/9repxo/article66142166.ece/alternates/FREE_1200/AFP_32NJ26T.jpg" alt="UAE vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-2022-warm-up-games-uae-vs-argentina-oman-vs-germany-qatar-wc-live-streaming-info/article66142168.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE vs Argentina, Oman vs Germany: When, where to watch warm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZHX86ffCHhUiBbYaPXlfhLdxhBy48UULCMAts9xkr8ZPNe1_UGBTwtTXybX6KAFqGSDodQrR4" alt="UAE vs Argentina, Oman vs Germany: When, where to watch warm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eight of the 32 nations in the FIFA World Cup will be in action in friendlies tomorrow, with two World Cup winners – Germany and Argentina – among them.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/fifa-world-cup-2022-fifa-wc-warm-up-matches-start-tuesday-check-the-entire-list-as-lionel-messis-argentina-and-cristiano-ronaldos-portugal-also-in-action-follow-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World CUP 2022: FIFA WC Warm-UP Matches start today ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTsHn0G7x78zkRN-IrEMr_0XTsBzq-oEwA28_cySUH_BsFz3jj9_A0Txske9HRW5d5gJXL2Oe0" alt="FIFA World CUP 2022: FIFA WC Warm-UP Matches start today ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World CUP 2022: FIFA WC Warm-UP Matches start Tuesday, FIFA WC Warm-up GAMES Schedule, UAE vs Argentina live, Oman vs Germany live, Poland vs Chile&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Football match</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Football match"/>
        <meta name="description" content="Trending News about Football match" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Football match</h1>
            <Image width={800} height={500} src="https://gumlet.assettype.com/Prabhatkhabar%2F2022-11%2F3ab181a9-a48d-4800-b475-2771a586bd9a%2Fsports_live.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" alt="Football match"/>
            <h3>Recent News</h3>
            <a href='https://www.prabhatkhabar.com/live/sports-news-live-updates-20-november-sunday-2022-cricket-football-match-players-aml-jst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports News LIVE: प्रो कबड्डी में हरियाणा स्टीलर्स पर दबंग दिल्ली की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWf2Bo4pWUQc4nNCWNu2Yg2RN6jnMR4-TysXmeR-WbWV1N7azzviP9HBptrB9D7hj1BVF71bEU" alt="Sports News LIVE: प्रो कबड्डी में हरियाणा स्टीलर्स पर दबंग दिल्ली की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports News live: कतर में आज फीफा वर्ल्ड कप का आगाज होगा. उपराष्ट्रपति जगदीप धनखड़ कतर रविवार&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}
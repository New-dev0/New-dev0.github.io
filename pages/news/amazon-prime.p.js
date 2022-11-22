import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon Prime</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon Prime"/>
        <meta name="description" content="Trending News about Amazon Prime" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon Prime</h1>
            <Image width={800} height={500} src="https://navbharattimes.indiatimes.com/photo/msid-95639009,imgsize-29330/pic.jpg" alt="Amazon Prime"/>
            <h3>Recent News</h3>
            <a href='https://navbharattimes.indiatimes.com/tech/gadgets-news/amazon-prime-disneyhostar-may-get-free-subscription-login/articleshow/95639009.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Prime, Disney+Hotstar का मिल रहा Free सब्सक्रिप्शन, ऐसे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRi6jsv21-Iqg96x7vJ2_oBN7zQzzm7HlsZCc0pp-kCFFwRyigLqYvffo_zt5X_ZnlUJDc9QTMf" alt="Amazon Prime, Disney+Hotstar का मिल रहा Free सब्सक्रिप्शन, ऐसे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Airtel-Jio का फ्री सब्सक्रिप्शन मिल सकता है। आपको Amazon Prime, Disney+Hotstar पर Login करना होगा।</p></div>
            </div>
        </a>
        </Template></>;
}
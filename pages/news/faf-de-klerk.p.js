import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Faf de Klerk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Faf de Klerk"/>
        <meta name="description" content="Trending News about Faf de Klerk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Faf de Klerk</h1>
            <Image width={800} height={500} src="https://www.ruck.co.uk/wp-content/uploads/2022/11/Screenshot-2022-11-26-at-21.34.48.png" alt="Faf de Klerk"/>
            <h3>Recent News</h3>
            <a href='https://www.ruck.co.uk/so-funny-faf-de-klerk-mocks-jonny-hill-mercilessly-after-baiting-lock/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;So funny&quot; - Faf de Klerk mocks Jonny Hill mercilessly after baiting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyQvZrvttkJryLESfNGr7W0hS_eJX4hl5WM4whwhG4k9Rw8nh5HbQWhaW2entwf3cW-yTzlYd4" alt="&quot;So funny&quot; - Faf de Klerk mocks Jonny Hill mercilessly after baiting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Springbok scrum-half bounced back up and sarcastically applauded the England lock for his stupidness. It was a moment that angered England fans with one&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/rugby/springboks/faf-de-klerk-leaves-twickenham-on-stretcher-waves-to-crowd-video-watch-breaking-26-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Faf de Klerk leaves Twickenham on a stretcher, waves to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgNFXTe2XM1lJ3aoYUBL72dVEYpfmh4ywDlxjnA8QmcOd29dFXv1nqhNBW51jtJ8sbPcUdlKJa" alt="WATCH: Faf de Klerk leaves Twickenham on a stretcher, waves to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Springbok scrumhalf Faf de Klerk was forced to leave the field on a stretcher late in the second half against England on Saturday.</p></div>
            </div>
        </a>
        </Template></>;
}